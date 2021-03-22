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
Blockly.Arduino['mkrIoTCarrier_Pressure'] = function(block) {
 Blockly.Arduino.addInclude('Arduino_MKRIoTCarrier', '#include <Arduino_MKRIoTCarrier.h>');
 var code = `carrier.Pressure.readPressure()`;
 Blockly.Arduino.addVariable("MKRIoTCarrierObject",`MKRIoTCarrier carrier;`, true);
 Blockly.Arduino.addSetup('carrierStart', 'carrier.begin();', true);
 return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['mkrIoTCarrier_readColor_Update'] = function(block) {
 Blockly.Arduino.addInclude('Arduino_MKRIoTCarrier', '#include <Arduino_MKRIoTCarrier.h>');
 Blockly.Arduino.addDeclaration("RGBLIGHT",`int r,g,b,light;`);
 var code = 'while (! carrier.Light.colorAvailable()) {\n' +
     '    delay(5);\n' +
     '  }\n'
 code += 'carrier.Light.readColor(r,g,b,light);\n';
 Blockly.Arduino.addVariable("MKRIoTCarrierObject",`MKRIoTCarrier carrier;`, true);
 Blockly.Arduino.addSetup('carrierStart', 'carrier.begin();', true);
 return code;
};


Blockly.Arduino['mkrIoTCarrier_readColor'] = function(block) {
 Blockly.Arduino.addInclude('Arduino_MKRIoTCarrier', '#include <Arduino_MKRIoTCarrier.h>');
 Blockly.Arduino.addDeclaration("RGBLIGHT",`int r,g,b,light;`);
 var chanel = block.getFieldValue("CHANEL");
 var code = `${chanel}`;
 Blockly.Arduino.addVariable("MKRIoTCarrierObject",`MKRIoTCarrier carrier;`, true);
 Blockly.Arduino.addSetup('carrierStart', 'carrier.begin();', true);
 return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['mkrIoTCarrier_Proximity'] = function(block) {
 Blockly.Arduino.addInclude('Arduino_MKRIoTCarrier', '#include <Arduino_MKRIoTCarrier.h>');
 Blockly.Arduino.addFunction("PROX",`int proximity() {\n
  while (!APDS.proximityAvailable()) {\n
    delay(5);\n
  }\n
  return APDS.readProximity();\n
};\n`);
 var code = `proximity()`;
 Blockly.Arduino.addVariable("MKRIoTCarrierObject",`MKRIoTCarrier carrier;`, true);
 Blockly.Arduino.addSetup('carrierStart', 'carrier.begin();', true);
 return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['mkrIoTCarrier_SetScreenColor'] = function(block) {
 Blockly.Arduino.addInclude('Arduino_MKRIoTCarrier', '#include <Arduino_MKRIoTCarrier.h>');
 var Color = block.getFieldValue("COLOR");
 var code = `carrier.display.fillScreen(${Color});\n`;
 Blockly.Arduino.addVariable("MKRIoTCarrierObject",`MKRIoTCarrier carrier;`, true);
 Blockly.Arduino.addSetup('carrierStart', 'carrier.begin();', true);
 return code;
};
Blockly.Arduino['mkrIoTCarrier_SetScreenText'] = function(block) {
 Blockly.Arduino.addInclude('Arduino_MKRIoTCarrier', '#include <Arduino_MKRIoTCarrier.h>');
 var color = block.getFieldValue("COLOR");
 var size = block.getFieldValue("SIZE");
 var content = Blockly.Arduino.valueToCode(block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
 var code = `carrier.display.setTextColor(${color});\n`;
 code +=  `carrier.display.setTextSize(${size});\n`;
 code += `carrier.display.setCursor(0, 0);\n`;
 code += `carrier.display.print(${content});\n`;
 Blockly.Arduino.addVariable("MKRIoTCarrierObject",`MKRIoTCarrier carrier;`, true);
 Blockly.Arduino.addSetup('carrierStart', 'carrier.begin();', true);
 return code;
};
/**
 * Code generator mkr IoT Carrier shield relays
 */
Blockly.Arduino['mkrIoTCarrier_Relay'] = function(block) {
 Blockly.Arduino.addInclude('Arduino_MKRIoTCarrier', '#include <Arduino_MKRIoTCarrier.h>');
 var relayNumber = Blockly.Arduino.valueToCode(block, 'RELAY_NUMBER', Blockly.Arduino.ORDER_ATOMIC) || '0';
 var state = block.getFieldValue("STATE");
 var code;
 if (relayNumber == 2) {
   code = `carrier.Relay2`;
 } else {
   code = `carrier.Relay1`;
 }
  code += `.${state}();`;
 Blockly.Arduino.addVariable("MKRIoTCarrierObject",`MKRIoTCarrier carrier;`, true);
 Blockly.Arduino.addSetup('carrierStart', 'carrier.begin();', true);
 //carrier.leds.show();
 return code;
};