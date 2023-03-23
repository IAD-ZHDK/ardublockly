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

goog.provide('Blockly.Arduino.smartServos_Move_Degrees');

goog.require('Blockly.Arduino');

/**
 * Code generator mkr IoT Carrier shield dot-star LEDS
 */
Blockly.Arduino['smartServos_Move_Degrees'] = function(block) {
 Blockly.Arduino.addInclude('wiring_private', '#include "wiring_private.h"');
 var MotorID = Blockly.Arduino.valueToCode(block, 'MotorID', Blockly.Arduino.ORDER_ATOMIC) || '0';
 var Degrees = Blockly.Arduino.valueToCode(block, 'Degrees', Blockly.Arduino.ORDER_ATOMIC) || '0';
 var code = ` mySerial.print(String("#") + ${MotorID} + String("WD") + ${Degrees}  + "\r"); // degree mode \n`;
 

 Blockly.Arduino.addVariable("rxPin",`#define rxPin 1`, true);
 Blockly.Arduino.addVariable("txPin",`#define txPin 0`, true);

 Blockly.Arduino.addVariable("mySerialObject",`Uart mySerial(&sercom3, rxPin, txPin, SERCOM_RX_PAD_1, UART_TX_PAD_0);  // Create the new UART instance`, true);
 
 Blockly.Arduino.addSetup('pinPeripheralRX', 'pinPeripheral(rxPin, PIO_SERCOM);  //Assign RX function', true);
 Blockly.Arduino.addSetup('pinPeripheralTX', 'pinPeripheral(txPin, PIO_SERCOM);  //Assign TX function', true);
 Blockly.Arduino.addSetup('mySerialBufferClear', 'mySerial.print("#0D1500\r");    // this is used to clear the serial buffer', true);
 
 return code;
};
