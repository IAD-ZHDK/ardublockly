/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview XML toolbox embedded into a JavaScript text string.
 */
'use strict';

/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};

Ardublockly.TOOLBOX_XML =
    '<xml>' +
    '  <sep></sep>' +
    '  <category id="catLogic" name="Logic">' +
    '    <block type="controls_if"></block>' +
    '    <block type="logic_compare"></block>' +
    '    <block type="logic_operation"></block>' +
    '    <block type="logic_negate"></block>' +
    '    <block type="logic_boolean"></block>' +
    '    <block type="logic_null"></block>' +
    '    <block type="logic_ternary"></block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catLoops" name="Loops">' +
    '    <block type="controls_repeat_ext">' +
    '      <value name="TIMES">' +
    '        <block type="math_number">' +
    '          <field name="NUM">10</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="controls_whileUntil"></block>' +
    '    <block type="controls_for">' +
    '      <value name="FROM">' +
    '        <block type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="TO">' +
    '        <block type="math_number">' +
    '          <field name="NUM">10</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="BY">' +
    '        <block type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="controls_flow_statements"></block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catMath" name="Math">' +
    '    <block type="math_number"></block>' +
    '    <block type="math_arithmetic"></block>' +
    '    <block type="math_single"></block>' +
    '    <block type="math_trig"></block>' +
    '    <block type="math_constant"></block>' +
    '    <block type="math_number_property"></block>' +
    '    <block type="math_change">' +
    '      <value name="DELTA">' +
    '        <block type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="math_round"></block>' +
    '    <block type="math_modulo"></block>' +
    '    <block type="math_constrain">' +
    '      <value name="LOW">' +
    '        <block type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="HIGH">' +
    '        <block type="math_number">' +
    '          <field name="NUM">100</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="math_random_int">' +
    '      <value name="FROM">' +
    '        <block type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="TO">' +
    '        <block type="math_number">' +
    '          <field name="NUM">100</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="math_random_float"></block>' +
    '    <block type="math_formula"></block>' +
    '    <block type="base_map"></block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catText" name="Text">' +
    '    <block type="text"></block>' +
    '    <block type="text_join"></block>' +
    '    <block type="text_append">' +
    '      <value name="TEXT">' +
    '        <block type="text"></block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="text_length"></block>' +
    '    <block type="text_toint"></block>' +
    '    <block type="text_tofloat"></block>' +
    '    <block type="text_isEmpty"></block>' +
    //'    <!--block type="text_trim"></block Need to update block -->' +
    //'    <!--block type="text_print"></block Part of the serial comms -->' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catVariables" name="Variables">' +
    '    <block type="variables_get"></block>' +
    '    <block type="variables_set"></block>' +
    '    <block type="variables_set">' +
    '      <value name="VALUE">' +
    '        <block type="variables_set_type"></block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="variables_set_setup"></block>' +
    '    <block type="variables_set_type"></block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catFunctions" name="Functions" custom="PROCEDURE"></category>' +
    '  <sep></sep>' +
    '  <category id="catInputOutput" name="Input/Output">' +
    '    <block type="io_digitalwrite">' +
    '      <value name="STATE">' +
    '        <block type="io_highlow"></block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="io_digitalread"></block>' +
    '    <block type="io_builtin_led">' +
    '      <value name="STATE">' +
    '        <block type="io_highlow"></block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="io_analogwrite"></block>' +
    '    <block type="io_analogread"></block>' +
    '    <block type="io_highlow"></block>' +
    '    <block type="VCNL4040_Proximity"></block>' +
    '    <block type="io_neoPixel">' +
    '    <value name="PIN_NO">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">7</field>' +
    '        </shadow>' +
    '      </value>' +
    '    <value name="LEDNUMBER">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    <value name="RED">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    <value name="GREEN">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    <value name="BLUE">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +
    '    <block type="io_pulsein">' +
    '      <value name="PULSETYPE">' +
    '        <shadow type="io_highlow"></shadow>' +
    '      </value>' +
    '    </block>' +
    '    <block type="io_pulsetimeout">' +
    '      <value name="PULSETYPE">' +
    '        <shadow type="io_highlow"></shadow>' +
    '      </value>' +
    '      <value name="TIMEOUT">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">100</field>' +
    '        </shadow>' +
    '      </value>'+
    '    </block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catTime" name="Time">' +
    '    <block type="time_delay">' +
    '      <value name="DELAY_TIME_MILI">' +
    '        <block type="math_number">' +
    '          <field name="NUM">1000</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="time_delaymicros">' +
    '      <value name="DELAY_TIME_MICRO">' +
    '        <block type="math_number">' +
    '          <field name="NUM">100</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="time_millis"></block>' +
    '    <block type="time_micros"></block>' +
    '    <block type="infinite_loop"></block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catAudio" name="Audio">' +
    '    <block type="io_tone">' +
    '      <field name="TONEPIN">0</field>' +
    '      <value name="FREQUENCY">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">220</field>' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +
    '    <block type="io_notone"></block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catMotors" name="Motors">' +
    '    <block type="servo_write">' +
    '      <value name="SERVO_ANGLE">' +
    '        <block type="math_number">' +
    '          <field name="NUM">90</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="servo_read"></block>' +
    '    <block type="stepper_config">' +
    '      <field name="STEPPER_NUMBER_OF_PINS">2</field>' +
    '      <field name="STEPPER_PIN1">1</field>' +
    '      <field name="STEPPER_PIN2">2</field>' +
    '      <value name="STEPPER_STEPS">' +
    '        <block type="math_number">' +
    '          <field name="NUM">100</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="STEPPER_SPEED">' +
    '        <block type="math_number">' +
    '          <field name="NUM">10</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="stepper_step">' +
    '      <value name="STEPPER_STEPS">' +
    '        <block type="math_number">' +
    '          <field name="NUM">10</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catComms" name="Comms">' +
    '    <block type="serial_setup"></block>' +
    '    <block type="serial_print"></block>' +
    '    <block type="text_prompt_ext">' +
    '      <value name="TEXT">' +
    '        <block type="text"></block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="spi_setup"></block>' +
    '    <block type="spi_transfer"></block>' +
    '    <block type="spi_transfer_return"></block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="smartServos" name="Lynx Smart Servos">' +
    '    <block type="smartServos_Setup_MKR1010"></block>' +
    '    <block type="smartServos_Setup_SoftwareSerial">' +
    '     <value name="TXPin">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">9</field>' +
    '        </shadow>' +
    '      </value>' +
    '      <value name="RXPin">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">8</field>' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +
    '    <block type="smartServos_Set_NewID">' +
    '      <value name="MotorID">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">254</field>' +
    '        </shadow>' +
    '      </value>' +
    '      <value name="NewID">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +
    '    <block type="smartServos_Move_Degrees">' +
    '      <value name="MotorID">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">254</field>' +
    '        </shadow>' +
    '      </value>' +
    '      <value name="Degrees">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +
    '    <block type="smartServos_Move_RPM">' +
    '      <value name="MotorID">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">254</field>' +
    '        </shadow>' +
    '      </value>' +
    '      <value name="RPM">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +
    '  <block type="smartServos_Set_LED">' +
    '      <value name="MotorID">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">254</field>' +
    '        </shadow>' +
    '      </value>' +
    '      <value name="LEDCOLOR">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +
    '  <sep></sep>' +
    '  </category>' +
    '  <category id="mkrIoTCarrier" name="MKR IoT Carrier">' +
    '    <block type="mkrIoTCarrier_CaseBoolean"></block>' +
    '  <category id="inputs" name="inputs">' +
    '    <block type="mkrIoTCarrier_BTNS_Update"></block>' +
    '    <block type="mkrIoTCarrier_BTNS"></block>' +
    '    <block type="mkrIoTCarrier_IMU_Update"></block>' +
    '    <block type="mkrIoTCarrier_IMU"></block>' +
    '    <block type="mkrIoTCarrier_Humidity"></block>' +
    '    <block type="mkrIoTCarrier_Temperature"></block>' +
    '    <block type="mkrIoTCarrier_Pressure"></block>' +
    '    <block type="mkrIoTCarrier_readColor_Update"></block>' +
    '    <block type="mkrIoTCarrier_readColor"></block>' +
    '    <block type="mkrIoTCarrier_Proximity"></block>' +
    '    <block type="mkrIoTCarrier_Gesture"></block>' +
    '  </category>' +
    '  <category id="outputs" name="outputs">' +
    '    <block type="mkrIoTCarrier_SetScreenColor"></block>' +
    '    <block type="mkrIoTCarrier_SetScreenText"></block>' +
    '    <block type="mkrIoTCarrier_Relay"></block>' +
    '    <block type="mkrIoTCarrier_led">' +
    '    <value name="LEDNUMBER">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    <value name="RED">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    <value name="GREEN">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    <value name="BLUE">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +
    '    <block type="mkrIoTCarrier_Buzzer">' +
    '      <value name="FREQUENCY">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">220</field>' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +
    '  </category>' +
    '  </category>' +
    '  <category id="catCAS" name="IoT">' +
    '    <block type="wifi_setup"></block>' +
    '    <block type="Nina_led">' +
    '    <value name="RED">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    <value name="GREEN">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    <value name="BLUE">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '</block>' +
    '    <block type="Nina_led_hsb">' +
    '    <value name="HUE">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    <value name="SATURATION">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">80</field>' +
    '        </shadow>' +
    '      </value>' +
    '    <value name="BRIGHTNESS">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">100</field>' +
    '        </shadow>' +
    '      </value>' +
    '</block>' +
    '    <block type="OSC_setup">' +
    '      <value name="TOPIC">' +
    '        <block type="text"></block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="OSC_publish">' +
    '      <value name="REMOTEADRESS">' +
 //   '       <shadow type="text">' +
//    '        <field name="NUM">1.1.1.1</field>' +
    '        <block type="text">"sensor"</block>' +   
  //  '       </shadow>' +
    '      </value>' +
    '      <value name="TOPIC">' +
    '        <block type="text">"sensor"</block>' +
    '      </value>' +
    '      <value name="PAYLOAD">' +
    '        <block type="text"></block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="OSC_subscribe">' +
    '      <value name="TOPIC">' +
    '        <block type="text">"sensor"</block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="mqtt_setup"></block>' +
    '    <block type="mqtt_subscribe">' +
    '      <value name="TOPIC">' +
    '        <block type="text">"sensor"</block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="mqtt_publish">' +
    '      <value name="TOPIC">' +
    '        <block type="text"></block>' +
    '      </value>' +
    '      <value name="PAYLOAD">' +
    '        <block type="text"></block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="ifttt_setup"></block>' +
    '  </category>' +
    '</xml>';
