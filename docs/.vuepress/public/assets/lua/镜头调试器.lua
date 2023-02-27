-------------------------------------------------------------------------------------------------
-- model2镜头辅助  作者狼魂：836098506
-- 开启方式: 构造model2对象设置 debug_camera = true 即可打开辅助 但正式环境中不推荐使用该功能
-- 操作方式: 跟[绿苹果查看模型工具]一致 懂的都懂
-------------------------------------------------------------------------------------------------

local japi                              = require 'jass.japi'
local jdbg                              = require 'jass.debug'

local GetMouseVectorX                   = japi.GetMouseVectorX
local GetMouseVectorY                   = japi.GetMouseVectorY
local GetKeyState                       = japi.GetKeyState
local GetWheelDelta                     = japi.GetWheelDelta
local IsWindowActive                    = japi.IsWindowActive

local MESSAGE_KEY_LEFTCTRL              = 0x11    -- 左ctrl键
local MESSAGE_KEY_LEFTALT               = 0x12    -- 左alt键
local MESSAGE_BUTTON_LEFT               = 0x01    -- 鼠标左键
local MESSAGE_BUTTON_RIGHT              = 0x02    -- 鼠标右键

local CAMERA_DEG                        = math.deg(1)
local D3DX_PI                           = math.pi
local CAMERA_DEFAULT_PITCH              = D3DX_PI / 4.0;
local CAMERA_DEFAULT_YAW                = 0.0;
local CAMERA_DEFAULT_DISTANCE           = 200.0;
local CAMERA_DEFAULT_MIN_DISTANCE       = 200.0;
local CAMERA_MIN_PITCH                  = -(D3DX_PI / 2.0) + 0.01;
local CAMERA_MIN_DISTANCE               = 15.0;
local CAMERA_MAX_PITCH                  = (D3DX_PI / 2.0) - 0.01;
local CAMERA_MAX_DISTANCE               = 8000.0;
local CAMERA_FACTOR_PITCH               = 0.02;
local CAMERA_FACTOR_YAW                 = 0.02;
local CAMERA_FACTOR_DISTANCE            = 0.002;
local CAMERA_FACTOR_MOVE                = 0.004;
local CAMERA_FACTOR_RELATIVE_DISTANCE   = 500.0;
local CAMERA_FACTOR_RELATIVE_MOVE       = 500.0;
local CAMERA_FACTOR_MODEL               = 2.0;
local CAMERA_WHEELDELTA                 = 30.0;


local Mouse = {}

Mouse.isDown = false;
Mouse.DX = 0;
Mouse.DY = 0;
Mouse.DZ = 0;

Mouse.lX = 0;
Mouse.lY = 0;
Mouse.lZ = 0;

function Mouse:onDown()
    self.isDown = true
end

function Mouse:onUp()
    self.isDown = false
end

function Mouse:onWheel()
    if GetKeyState(MESSAGE_KEY_LEFTCTRL) then return end;
    if not IsWindowActive() then return end;
    self.DZ = self.DZ + ((GetWheelDelta()>0) and 1 or -1) * CAMERA_WHEELDELTA;
end

function Mouse:OnMove()
    if not self.isDown then 
        self.lX = GetMouseVectorX();
        self.lY = -GetMouseVectorY();
        self.lZ = 0;
    else
        self.DX = GetMouseVectorX() - self.lX;
        self.DY = -GetMouseVectorY() - self.lY;
        self.DZ = 0;
        self.lX = GetMouseVectorX();
        self.lY = -GetMouseVectorY();
    end
end

function Mouse:GetDX()
    return self.DX
end 

function Mouse:GetDY()
    return self.DY
end 

function Mouse:GetDZ()
    local v = self.DZ
    self.DZ = 0
    return v 
end 

local D3DXVECTOR3 = {}
setmetatable(D3DXVECTOR3 ,D3DXVECTOR3)
D3DXVECTOR3.__index = D3DXVECTOR3

D3DXVECTOR3.x = 0.00
D3DXVECTOR3.y = 0.00
D3DXVECTOR3.z = 0.00

function D3DXVECTOR3:get()
    return self.x, self.y, self.z
end

function D3DXVECTOR3:__call(x, y, z)
    return setmetatable({x=x, y=y, z=z,}, self)
end

local CAMERA = {
    DefaultTarget = D3DXVECTOR3();
    Source = D3DXVECTOR3();
    Target = D3DXVECTOR3();
    Up = D3DXVECTOR3();
    DefaultPitch = 0.00;
    DefaultYaw = 0.00;
    DefaultDistance = 15.00;
    Pitch = 0.00;
    Yaw = 0.00;
    Distance = 15.00;
    ValidMouseMove = false;
}
CAMERA.__index = CAMERA

function CAMERA:new()
    return setmetatable({}, CAMERA)
end 

-- 输出
function CAMERA:__tostring()
    local buffer = {}
    table.insert(buffer, "{")
    table.insert(buffer, ("    Source = {x=%.04f, y=%.04f, z=%.04f, }, "):format(self.Source.x, self.Source.y, self.Source.z) )
    table.insert(buffer, ("    Target = {x=%.04f, y=%.04f, z=%.04f, }, "):format(self.Target.x, self.Target.y, self.Target.z) )
    table.insert(buffer, ("    Pitch = %.02f, "):format(self.Pitch) )
    table.insert(buffer, ("    Yaw = %.02f, "):format(self.Yaw) )
    table.insert(buffer, ("    Distance = %.02f, "):format(self.Distance) )
    table.insert(buffer, "}")
    return table.concat(buffer, '\r\n')
end 

function CAMERA:SetCameras(data)
    self.Source = D3DXVECTOR3( data.Source.x, data.Source.y, data.Source.z);
    self.Target = D3DXVECTOR3( data.Target.x, data.Target.y, data.Target.z);
    self.Up = D3DXVECTOR3(0.0, 0.0, 1.0);
    self.Pitch = data.Pitch;
    self.Yaw = data.Yaw;
    self.Distance = data.Distance;
    self:UpdateSourcePosition();
end

function CAMERA:SetDefaults(targetCamera)
	self.DefaultTarget = D3DXVECTOR3(targetCamera.x, targetCamera.y, targetCamera.z);
	self.DefaultPitch = CAMERA_DEFAULT_PITCH;
	self.DefaultYaw = CAMERA_DEFAULT_YAW;
	self.DefaultDistance = CAMERA_DEFAULT_DISTANCE;
    self:UpdateSourcePosition();
end

-- 重置镜头
function CAMERA:Reset()
    self.Source = D3DXVECTOR3(0.0, 0.0, 0.0);
    self.Target = self.DefaultTarget;
    self.Up = D3DXVECTOR3(0.0, 0.0, 1.0);
    self.Pitch = self.DefaultPitch;
    self.Yaw = self.DefaultYaw;
    self.Distance = self.DefaultDistance;
    self:UpdateSourcePosition();
end

function CAMERA:UpdateSourcePosition()
	self.Source.x = self.Target.x + self.Distance * math.cos(self.Pitch) * math.cos(self.Yaw);
	self.Source.y = self.Target.y + self.Distance * math.cos(self.Pitch) * math.sin(self.Yaw);
	self.Source.z = self.Target.z + self.Distance * math.sin(self.Pitch);
end

function CAMERA:Update()
    if not IsWindowActive() then return end;
    -- 按下ctrl键时停止刷新镜头
	if GetKeyState(MESSAGE_KEY_LEFTCTRL) then return end;
    local AltDown = GetKeyState(MESSAGE_KEY_LEFTALT);
    local ValidMouseMove = self.ValidMouseMove
	if(GetKeyState(MESSAGE_BUTTON_LEFT) or GetKeyState(MESSAGE_BUTTON_RIGHT)) ~= true then 
        ValidMouseMove = false;
    end

	if(AltDown) then 
        if (ValidMouseMove) and GetKeyState(MESSAGE_BUTTON_LEFT) then 
            self.Distance = self.Distance + Mouse:GetDY() * 10.0 * CAMERA_FACTOR_DISTANCE * CAMERA_FACTOR_RELATIVE_DISTANCE;
        end 
    else
        if (ValidMouseMove) and GetKeyState(MESSAGE_BUTTON_LEFT) then 
            self.Pitch = self.Pitch + Mouse:GetDY() * CAMERA_FACTOR_PITCH * CAMERA_DEG;
            self.Yaw = self.Yaw - Mouse:GetDX() * CAMERA_FACTOR_YAW * CAMERA_DEG;
        end 
    end 
	if(self.Pitch < (CAMERA_MIN_PITCH * CAMERA_DEG)) then self.Pitch = (CAMERA_MIN_PITCH * CAMERA_DEG)  end;
	if(self.Pitch > (CAMERA_MAX_PITCH * CAMERA_DEG)) then self.Pitch = (CAMERA_MAX_PITCH * CAMERA_DEG)  end;
	
    while(self.Yaw < 0.0) do 
        self.Yaw = self.Yaw + (D3DX_PI * 2) * CAMERA_DEG;
    end 
	while(self.Yaw >= (D3DX_PI * 2)) do
        self.Yaw = self.Yaw - (D3DX_PI * 2) * CAMERA_DEG;
    end
    self.Distance = self.Distance - Mouse:GetDZ() * CAMERA_FACTOR_DISTANCE * CAMERA_FACTOR_RELATIVE_DISTANCE;

	if(self.Distance < CAMERA_MIN_DISTANCE) then self.Distance = CAMERA_MIN_DISTANCE end;
	if(self.Distance > CAMERA_MAX_DISTANCE) then self.Distance = CAMERA_MAX_DISTANCE end;

    if (ValidMouseMove) and GetKeyState(MESSAGE_BUTTON_RIGHT) then 
		local X_X =  Mouse:GetDX() * math.sin(self.Yaw);
		local X_Y = -Mouse:GetDY() * math.sin(self.Pitch) * math.cos(self.Yaw);
		local Y_X = -Mouse:GetDX() * math.cos(self.Yaw);
		local Y_Y = -Mouse:GetDY() * math.sin(self.Pitch) * math.sin(self.Yaw);
		local Z_X = 0.0;
		local Z_Y = Mouse:GetDY() * math.cos(self.Pitch);
		local Factor = CAMERA_FACTOR_MOVE * CAMERA_FACTOR_RELATIVE_MOVE

		self.Target.x = self.Target.x + Factor * (X_X + X_Y);
		self.Target.y = self.Target.y + Factor * (Y_X + Y_Y);
		self.Target.z = self.Target.z + Factor * (Z_X + Z_Y);
    end 
    self:UpdateSourcePosition();
end

function CAMERA:SetPosition(SourcePosition, TargetPosition)
	self.Target = TargetPosition;
	self.Distance = math.sqrt((SourcePosition.x - TargetPosition.x) * (SourcePosition.x - TargetPosition.x) + (SourcePosition.y - TargetPosition.y) * (SourcePosition.y - TargetPosition.y));
	self.Pitch = (self.Distance == 0.0) and 0.0 or math.asin(-math.abs(SourcePosition.z - TargetPosition.z) / self.Distance);
	self.Yaw = math.atan2((SourcePosition.y - TargetPosition.y), (SourcePosition.x - TargetPosition.x));
	if(self.Distance < CAMERA_MIN_DISTANCE) then self.Distance = CAMERA_MIN_DISTANCE end;
	if(self.Distance > CAMERA_MAX_DISTANCE) then self.Distance = CAMERA_MAX_DISTANCE end;
end

local model2_class = class.model2
local old_build  = model2_class.build
local old_remove = model2_class.remove
local old_set_model = model2_class.set_model
local ValidMouseMove = false

local debug_cameras_map = {}

local defaultData = { 
    Source = { 200, 0, 100, };
    Target = { 0, 0, 0, };
    Pitch = 12, 
    Yaw = 3, 
    Distance = 600, 
}

-- 是否开启模型调试镜头辅助
model2_class.debug_camera = false

function model2_class:build()
    old_build(self)
    -- 注册镜头
    if self._id and self._id ~= 0 and self.debug_camera == true then 
        local camera_helper = CAMERA:new()
        self._camera_helper = camera_helper
        camera_helper:Reset()
        camera_helper:SetCameras(defaultData)
        -- 启用焦点捕获
        japi.FrameSetIgnoreTrackEvents(self._id, false)
        debug_cameras_map[self._id] = self
    end 
   return self 
end

function model2_class:remove()
    debug_cameras_map[self._id] = nil
    old_remove(self)
end

function model2_class:set_model(...)
    local camera_helper = self._camera_helper
    if camera_helper then 
        camera_helper:Reset()
        camera_helper:SetCameras(defaultData)
    end 
    return old_set_model(self, ...)
end 

game.register_event{
    on_key_up = function(code)
        local focus = japi.GetMouseFocus()
        local model2 = debug_cameras_map[focus]
        if code == KEY['C'] and model2 then 
            local camera_helper =  model2._camera_helper
            local camera_string = tostring(camera_helper)
            japi.set_copy_str(camera_string)
            print( ("模型[%q]的镜头数据已经复制到剪贴板,按ctrl+v复制"):format(model2.model) )
            print( camera_string )
        end 
    end,
    on_mouse_down = function()
        Mouse:onDown()
    end,
    on_mouse_up = function()
        Mouse:onUp()
    end,
    on_mouse_right_down = function()
        Mouse:onDown()
    end,
    on_mouse_right_up = function()
        Mouse:onUp()
    end,
    on_mouse_wheeldelta = function()
        local focus = japi.GetMouseFocus()
        local model2 = debug_cameras_map[focus]
        if model2 then 
            local camera_helper =  model2._camera_helper
            if camera_helper.ValidMouseMove == true then 
                Mouse:onWheel()
                return true
            end
        else
            Mouse.DZ = 0
        end 
    end,
    on_update = function()
        local focus = japi.GetMouseFocus()
        Mouse:OnMove()
        for frame, model2 in pairs(debug_cameras_map) do 
            if model2._camera_helper then
                local camera_helper =  model2._camera_helper
                if frame == focus then 
                    camera_helper.ValidMouseMove = true
                    camera_helper:Update()
                    model2:set_camera_source( camera_helper.Source.x, camera_helper.Source.y, camera_helper.Source.z )
                    model2:set_camera_target( camera_helper.Target.x, camera_helper.Target.y, camera_helper.Target.z )
                else 
                    camera_helper.ValidMouseMove = false
                end
            end
        end 
    end,
}

return CAMERA
