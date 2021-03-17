/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for the Arduino wifi blocks.
 *     Arduino wifi library docs: https://www.arduino.cc/en/Reference/WiFiNINABegin
 *
 */
'use strict';

goog.provide('Blockly.Arduino.mkrIoTCarrier_led');

goog.require('Blockly.Arduino');

/**
 * Code generator mkr IoT Carrier shield dot-star LEDS
 */
Blockly.Arduino['mkrIoTCarrier_led'] = function(block) {
 Blockly.Arduino.addInclude('Arduino_MKRIoTCarrier', '#include <Arduino_MKRIoTCarrier.h>');
 var ledNumber = Blockly.Arduino.valueToCode(block, 'LEDNUMBER', Blockly.Arduino.ORDER_ATOMIC) || '0';
 var red = Blockly.Arduino.valueToCode(block, 'RED', Blockly.Arduino.ORDER_ATOMIC) || '0';
 var green =  Blockly.Arduino.valueToCode(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC) || '0';
 var blue =  Blockly.Arduino.valueToCode(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
 var code = `carrier.leds.setPixelColor(${ledNumber}`;
 code += `, ${red}`;
 code += `, ${green}`;
 code += `, ${blue}`;
 code += `);\n`;
 code += `carrier.leds.show();\n`;
 Blockly.Arduino.addVariable("MKRIoTCarrierObject",`MKRIoTCarrier carrier;`, true);
 Blockly.Arduino.addSetup('carrierStart', 'carrier.begin();', true);
 //carrier.leds.show();
 return code;
};

/**
 * Code generator mkr IoT Carrier shield buzzer
 */
Blockly.Arduino['mkrIoTCarrier_Buzzer'] = function(block) {
 Blockly.Arduino.addInclude('Arduino_MKRIoTCarrier', '#include <Arduino_MKRIoTCarrier.h>');
 var frequency = Blockly.Arduino.valueToCode(block, 'FREQUENCY', Blockly.Arduino.ORDER_ATOMIC) || '0';
 if (frequency == 0) {
  code = `carrier.Buzzer.noSound();\n`;
 } else {
  code = `carrier.Buzzer.sound(${frequency});\n`;
 }
 var code;
 Blockly.Arduino.addVariable("MKRIoTCarrierObject",`MKRIoTCarrier carrier;`, true);
 Blockly.Arduino.addSetup('carrierStart', 'carrier.begin();', true);
 //carrier.leds.show();
 return code;
};

Blockly.Arduino['mkrIoTCarrier_CaseBoolean'] = function(block) {
 Blockly.Arduino.addInclude('Arduino_MKRIoTCarrier', '#include <Arduino_MKRIoTCarrier.h>');
 var CASE = block.getFieldValue("CARRIER_CASE");
 var code = `CARRIER_CASE = ${CASE};\n`;
 Blockly.Arduino.addVariable("MKRIoTCarrierObject",`MKRIoTCarrier carrier;`, true);
 Blockly.Arduino.addSetup('carrierStart', 'carrier.begin();', true);
 return code;
};

Blockly.Arduino['mkrIoTCarrier_BTNS_Update'] = function(block) {
 Blockly.Arduino.addInclude('Arduino_MKRIoTCarrier', '#include <Arduino_MKRIoTCarrier.h>');
 var code = 'carrier.Buttons.update();\n';
 Blockly.Arduino.addVariable("MKRIoTCarrierObject",`MKRIoTCarrier carrier;`, true);
 Blockly.Arduino.addSetup('carrierStart', 'carrier.begin();', true);
 return code;
};

Blockly.Arduino['mkrIoTCarrier_BTNS'] = function(block) {
 Blockly.Arduino.addInclude('Arduino_MKRIoTCarrier', '#include <Arduino_MKRIoTCarrier.h>');
 var Btns = block.getFieldValue("BTNS");
 var code = `carrier.${Btns}.getTouch()`;
 Blockly.Arduino.addVariable("MKRIoTCarrierObject",`MKRIoTCarrier carrier;`, true);
 Blockly.Arduino.addSetup('carrierStart', 'carrier.begin();', true);
 return [code, Blockly.Arduino.ORDER_ATOMIC];
};



/**
 * Code generator mkr IoT Carrier IMU
 */
Blockly.Arduino['mkrIoTCarrier_IMU_Update'] = function(block) {
 Blockly.Arduino.addInclude('Arduino_MKRIoTCarrier', '#include <Arduino_MKRIoTCarrier.h>');

 Blockly.Arduino.addDeclaration("IMUXYZ",`float aX,aY,aZ;`);
 var code = 'carrier.IMUmodule.readAcceleration(aX, aY, aZ);\n';
 Blockly.Arduino.addVariable("MKRIoTCarrierObject",`MKRIoTCarrier carrier;`, true);
 Blockly.Arduino.addSetup('carrierStart', 'carrier.begin();', true);
 return code;
};

Blockly.Arduino['mkrIoTCarrier_IMU'] = function(block) {
 Blockly.Arduino.addInclude('Arduino_MKRIoTCarrier', '#include <Arduino_MKRIoTCarrier.h>');
 Blockly.Arduino.addDeclaration("IMUXYZ",`float aX,aY,aZ;`);
 var Axis = block.getFieldValue("AXIS");
 var code = `${Axis}`;
 Blockly.Arduino.addVariable("MKRIoTCarrierObject",`MKRIoTCarrier carrier;`, true);
 Blockly.Arduino.addSetup('carrierStart', 'carrier.begin();', true);
 return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['mkrIoTCarrier_Humidity'] = function(block) {
 Blockly.Arduino.addInclude('Arduino_MKRIoTCarrier', '#include <Arduino_MKRIoTCarrier.h>');
 var code = `carrier.Env.readHumidity()`;
 Blockly.Arduino.addVariable("MKRIoTCarrierObject",`MKRIoTCarrier carrier;`, true);
 Blockly.Arduino.addSetup('carrierStart', 'carrier.begin();', true);
 return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['mkrIoTCarrier_Temperature'] = function(block) {
 Blockly.Arduino.addInclude('Arduino_MKRIoTCarrier', '#include <Arduino_MKRIoTCarrier.h>');
 var code = `carrier.Env.readTemperature()`;
 Blockly.Arduino.addVariable("MKRIoTCarrierObject",`MKRIoTCarrier carrier;`, true);
 Blockly.Arduino.addSetup('carrierStart', 'carrier.begin();', true);
 return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['mkrIoTCarrier_SetScreenColor'] = function(block) {
 Blockly.Arduino.addInclude('Arduino_MKRIoTCarrier', '#include <Arduino_MKRIoTCarrier.h>');
 var Color = block.getFieldValue("COLOR");
 var code = `carrier.display.fillScreen(${Color});\n`;
 Blockly.Arduino.addVariable("MKRIoTCarrierObject",`MKRIoTCarrier carrier;`, true);
 return code;
};
