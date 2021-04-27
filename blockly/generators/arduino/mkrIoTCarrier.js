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
 code += `, ${green}`;
 code += `, ${red}`;
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
 let updateMethodName = "updateIMU";
 let readMethodName = "readIMU";
 let calibrationMethodName = "calibrateIMU";
 let postProcessMethodName = "postProcessIMU";

 Blockly.Arduino.addInclude('Arduino_MKRIoTCarrier', '#include <Arduino_MKRIoTCarrier.h>');

 Blockly.Arduino.addVariable("MKRIoTCarrierObject",`MKRIoTCarrier carrier;`, true);
  Blockly.Arduino.addDeclaration("IMUVariables",`float accelX,            accelY,             accelZ,            // units m/s/s i.e. accelZ if often 9.8 (gravity)
      gyroX,             gyroY,              gyroZ,             // units dps (degrees per second)
      gyroDriftX,        gyroDriftY,         gyroDriftZ,        // units dps
      gyroRoll,          gyroPitch,          gyroYaw,           // units degrees (expect major drift)
      gyroCorrectedRoll, gyroCorrectedPitch, gyroCorrectedYaw,  // units degrees (expect minor drift)
      accRoll,           accPitch,           accYaw,            // units degrees (roll and pitch noisy, yaw not possible)
      complementaryRoll, complementaryPitch, complementaryYaw;  // units degrees (excellent roll, pitch, yaw minor drift)
      
      long lastTimeIMU;
      long lastIntervalIMU;
 `);

 Blockly.Arduino.addSetup('carrierStart', `carrier.begin();
 ${calibrationMethodName}(250, 250);
 lastTimeIMU = micros();
 `, true);

 Blockly.Arduino.addFunction(calibrationMethodName, `void ${calibrationMethodName}(int delayMillis, int calibrationMillis) {
  int calibrationCount = 0;

  delay(delayMillis); // to avoid shakes after pressing reset button

  float sumX, sumY, sumZ;
  int startTime = millis();
  while (millis() < startTime + calibrationMillis) {
    if (${readMethodName}()) {
      // in an ideal world gyroX/Y/Z == 0, anything higher or lower represents drift
      sumX += gyroX;
      sumY += gyroY;
      sumZ += gyroZ;

      calibrationCount++;
    }
  }

  if (calibrationCount == 0) {
    Serial.println("Failed to calibrate");
  }

  gyroDriftX = sumX / calibrationCount;
  gyroDriftY = sumY / calibrationCount;
  gyroDriftZ = sumZ / calibrationCount;
}`)

 Blockly.Arduino.addFunction(readMethodName, `bool ${readMethodName}() {
 if (carrier.IMUmodule.accelerationAvailable() && carrier.IMUmodule.gyroscopeAvailable() ) {
    carrier.IMUmodule.readAcceleration(accelX, accelY, accelZ);
    carrier.IMUmodule.readGyroscope(gyroX, gyroY, gyroZ);
    return true;
 }
 return false;
}`)

 Blockly.Arduino.addFunction(updateMethodName, `void ${updateMethodName}() {
 if (${readMethodName}()) {
    long currentTime = micros();
    lastIntervalIMU = currentTime - lastTimeIMU; // expecting this to be ~104Hz +- 4%
    lastTimeIMU = currentTime;

    ${postProcessMethodName}();
  }
}`)

 Blockly.Arduino.addFunction(postProcessMethodName, `void ${postProcessMethodName}() {
  accRoll = atan2(accelY, accelZ) * 180 / M_PI;
  accPitch = atan2(-accelX, sqrt(accelY * accelY + accelZ * accelZ)) * 180 / M_PI;

  float lastFrequency = 1000000.0 / lastIntervalIMU;
  gyroRoll = gyroRoll + (gyroX / lastFrequency);
  gyroPitch = gyroPitch + (gyroY / lastFrequency);
  gyroYaw = gyroYaw + (gyroZ / lastFrequency);

  gyroCorrectedRoll = gyroCorrectedRoll + ((gyroX - gyroDriftX) / lastFrequency);
  gyroCorrectedPitch = gyroCorrectedPitch + ((gyroY - gyroDriftY) / lastFrequency);
  gyroCorrectedYaw = gyroCorrectedYaw + ((gyroZ - gyroDriftZ) / lastFrequency);

  complementaryRoll = complementaryRoll + ((gyroX - gyroDriftX) / lastFrequency);
  complementaryPitch = complementaryPitch + ((gyroY - gyroDriftY) / lastFrequency);
  complementaryYaw = complementaryYaw + ((gyroZ - gyroDriftZ) / lastFrequency);

  complementaryRoll = 0.98 * complementaryRoll + 0.02 * accRoll;
  complementaryPitch = 0.98 * complementaryPitch + 0.02 * accPitch;
}`)

 // reading
 let code = `${updateMethodName}();\n`;
 return code;
};

Blockly.Arduino['mkrIoTCarrier_IMU'] = function(block) {
 var Axis = block.getFieldValue("AXIS");
 var code = `${Axis}`;
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

Blockly.Arduino['mkrIoTCarrier_Gesture'] = function(block) {
 Blockly.Arduino.addInclude('Arduino_MKRIoTCarrier', '#include <Arduino_MKRIoTCarrier.h>');
 Blockly.Arduino.addFunction("GEST",`int gesture() {\n
  while (!APDS.gestureAvailable()) {\n
    delay(5);\n
  }\n
  return APDS.readGesture();\n
};\n`);
 var code = `gesture()`;
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