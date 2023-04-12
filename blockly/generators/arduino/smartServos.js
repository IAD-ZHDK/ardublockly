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
goog.provide('Blockly.Arduino.smartServos_Move_RPM');

goog.require('Blockly.Arduino');


/**
 * Code generator for Lynx Smart Servos serial MKR 1010
 */
Blockly.Arduino['smartServos_Setup_MKR1010'] = function(block) {
    Blockly.Arduino.addInclude('wiring_private', '#include "wiring_private.h"');

    var code = ``;
    
    Blockly.Arduino.addVariable("rxPin",`#define rxPin 1`, true);
    Blockly.Arduino.addVariable("txPin",`#define txPin 0`, true);

    Blockly.Arduino.addVariable("mySerialObject",`Uart mySerial(&sercom3, rxPin, txPin, SERCOM_RX_PAD_1, UART_TX_PAD_0);  // Create the new UART instance`, true);
    
    Blockly.Arduino.addSetup('pinPeripheralRX', 'pinPeripheral(rxPin, PIO_SERCOM);  //Assign RX function', true);
    Blockly.Arduino.addSetup('pinPeripheralTX', 'pinPeripheral(txPin, PIO_SERCOM);  //Assign TX function', true);
    Blockly.Arduino.addSetup('mySerialBegin', ' mySerial.begin(115200);', true);
    Blockly.Arduino.addSetup('mySerialBufferClear', 'mySerial.print("#0D1500\\r");    // this is used to clear the serial buffer', true);
    Blockly.Arduino.addFunction('SERCOM3_Handler', `void SERCOM3_Handler() {
       mySerial.IrqHandler();
     }`)
    return code;
   };
   
   /**
 * Code generator for Lynx Smart Servos non samd boards 
 */
Blockly.Arduino['smartServos_Setup_SoftwareSerial'] = function(block) {
    Blockly.Arduino.addInclude('wiring_private', '#include <SoftwareSerial.h>');
    var RX = Blockly.Arduino.valueToCode(block, 'RXPin', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var TX = Blockly.Arduino.valueToCode(block, 'TXPin', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var code = ``;
    
    Blockly.Arduino.addVariable("rxPin",`#define rxPin + ${RX}`, true);
    Blockly.Arduino.addVariable("txPin",`#define txPin + ${TX}`, true);

    Blockly.Arduino.addVariable("mySerialObject",`SoftwareSerial mySerial(rxPin, txPin);  // Create the new software serial instance`, true);
    Blockly.Arduino.addSetup('mySerialBegin', ' mySerial.begin(115200);', true);
    Blockly.Arduino.addSetup('mySerialBufferClear', 'mySerial.print("#0D1500\\r");    // this is used to clear the serial buffer', true);
    return code;
   };

/**
 * Code generator for Lynx Smart Servos Move to Degrees 
 */
Blockly.Arduino['smartServos_Move_Degrees'] = function(block) {
 Blockly.Arduino.addInclude('wiring_private', '#include "wiring_private.h"');
 var MotorID = Blockly.Arduino.valueToCode(block, 'MotorID', Blockly.Arduino.ORDER_ATOMIC) || '0';
 var Degrees = Blockly.Arduino.valueToCode(block, 'Degrees', Blockly.Arduino.ORDER_ATOMIC) || '0';
 var code = ` mySerial.print(String("#") + ${MotorID} + String("D") + int(${Degrees}*10)  + "\\r"); // move to degrees \n`;
 return code;
};

/**
 * Code generator for Lynx Smart Servos Move RPM 
 */
Blockly.Arduino['smartServos_Move_RPM'] = function(block) {
    Blockly.Arduino.addInclude('wiring_private', '#include "wiring_private.h"');
    var MotorID = Blockly.Arduino.valueToCode(block, 'MotorID', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var RPM = Blockly.Arduino.valueToCode(block, 'RPM', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var code = ` mySerial.print(String("#") + ${MotorID} + String("WR") + ${RPM}  + "\\r"); // RPM move \n`;
   
    return code;
   };
   
/**
 * Code generator for Lynx Smart Servos LED
 */
Blockly.Arduino['smartServos_Set_LED'] = function(block) {
    Blockly.Arduino.addInclude('wiring_private', '#include "wiring_private.h"');
    var MotorID = Blockly.Arduino.valueToCode(block, 'MotorID', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var LEDCOLOR = Blockly.Arduino.valueToCode(block, 'LEDCOLOR', Blockly.Arduino.ORDER_ATOMIC) || '0'; 
    // 0=Off (black); 1=Red 2=Green; 3=Blue; 4=Yellow; 5=Cyan; 6=Magenta; 7=White;
    var code = ` mySerial.print(String("#") + ${MotorID} + String("LED") + ${LEDCOLOR}  + "\\r"); // set LED \n`;
    
    return code;
   };
   
/**
 * Code generator for Lynx Smart Servos set motor new ID
 */
Blockly.Arduino['smartServos_Set_NewID'] = function(block) {
    Blockly.Arduino.addInclude('wiring_private', '#include "wiring_private.h"');
    var MotorID = Blockly.Arduino.valueToCode(block, 'MotorID', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var NewID = Blockly.Arduino.valueToCode(block, 'NewID', Blockly.Arduino.ORDER_ATOMIC) || '0'; 
    // 0=Off (black); 1=Red 2=Green; 3=Blue; 4=Yellow; 5=Cyan; 6=Magenta; 7=White;
    var code = ``;
    var code = ` mySerial.print(String("#") + ${MotorID} + String("CID") + ${NewID}  + "\\r"); // set mew motor ID  \n`;
    code += ` delay(2000);  \n`;
    
    return code;
   };
   
