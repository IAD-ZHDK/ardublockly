/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for the Arduino wifi communcations.
 *     The Arduino built in functions syntax can be found at:
 *     http://arduino.cc/en/Reference/HomePage
 *
 */
'use strict';

goog.provide('Blockly.Blocks.mkrIoTCarrier');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.mkrIoTCarrier.HUE = 360;

Blockly.Blocks['mkrIoTCarrier_led'] = {
  /**
   * Block for controlling LEDS
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduino.cc/education/explore-iot-kit');
    this.setColour(Blockly.Blocks.mkrIoTCarrier.HUE);
    this.appendDummyInput()
        .appendField("Carrier LED")
    this.appendValueInput('LEDNUMBER')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("ID:");
    this.appendValueInput('RED')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("R:");
    this.appendValueInput('GREEN')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("G:");
    this.appendValueInput('BLUE')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("B:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Set one LED on the IOT Carrier");
  },

  onchange: function(event) {
    if (!this.workspace || event.type == Blockly.Events.MOVE ||
        event.type == Blockly.Events.UI) {
      return;  // Block deleted or irrelevant event
    }
    var ID = Blockly.Arduino.valueToCode(
        this, "LEDNUMBER", Blockly.Arduino.ORDER_ATOMIC)
    if (ID > 4) {
      this.setWarningText("LEDs can only have an ID of 0, 1, 2, 3 or 4", 'mkrIoTCarrier_led');
    }  else {
      this.setWarningText(null, 'mkrIoTCarrier_led');
    }
    var r = Blockly.Arduino.valueToCode(
        this, "RED", Blockly.Arduino.ORDER_ATOMIC)
    var g = Blockly.Arduino.valueToCode(
        this, "GREEN", Blockly.Arduino.ORDER_ATOMIC)
    var b = Blockly.Arduino.valueToCode(
        this, "BLUE", Blockly.Arduino.ORDER_ATOMIC)
    if (r > 255 ||g > 255||b > 255 ) {
      this.setWarningText("LEDs chanels can only have a value of 0 to 255", 'mkrIoTCarrier_led');
    }  else {
      this.setWarningText(null, 'mkrIoTCarrier_led');
    }
  },
};


Blockly.Blocks['mkrIoTCarrier_Buzzer'] = {
  /**
   * Block for controlling LEDS
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduino.cc/education/explore-iot-kit');
    this.setColour(Blockly.Blocks.mkrIoTCarrier.HUE);
    this.appendDummyInput()
        .appendField("Buzzer")
    this.appendValueInput('FREQUENCY')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(Blockly.Msg.ARD_TONEFREQ)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Set frequency of Buzzer on the IOT Carrier");
  },

  onchange: function(event) {
    if (!this.workspace || event.type == Blockly.Events.MOVE ||
        event.type == Blockly.Events.UI) {
      return;  // Block deleted or irrelevant event
    }
    var freq = Blockly.Arduino.valueToCode(
        this, "FREQUENCY", Blockly.Arduino.ORDER_ATOMIC)
    if (freq == 0) {
      this.setWarningText(null, 'mkrIoTCarrier_Buzzer');
    } else if (freq < 31 || freq > 65535) {
      this.setWarningText(Blockly.Msg.ARD_TONE_WARNING, 'mkrIoTCarrier_Buzzer');
    } else {
      this.setWarningText(null, 'mkrIoTCarrier_Buzzer');
    }
  },
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['mkrIoTCarrier_CaseBoolean'] = {
  /**
   * Block for case on carrier boolean
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduino.cc/education/explore-iot-kit');
    this.setColour(Blockly.Blocks.mkrIoTCarrier.HUE);
    this.appendDummyInput()
        .appendField("Case On:")
        .appendField(new Blockly.FieldDropdown([['FALSE', 'false'], ['TRUE', 'true']]), 'CARRIER_CASE');
    this.setNextStatement(true, null);
    this.setTooltip("Check to TRUE if case is on for adjusted sensitivity");
  },
};

Blockly.Blocks['mkrIoTCarrier_BTNS_Update'] = {
  /**
   * Block for updating Cap sens buttons
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduino.cc/education/explore-iot-kit');
    this.setColour(Blockly.Blocks.mkrIoTCarrier.HUE);

    this.appendDummyInput()
        .appendField("Buttons update")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Updates the button states");
  },
};

Blockly.Blocks['mkrIoTCarrier_BTNS'] = {
  /**
   * Block for Cap sens buttons
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduino.cc/education/explore-iot-kit');
    this.setColour(Blockly.Blocks.mkrIoTCarrier.HUE);
    this.appendDummyInput()
        .appendField("Read button:")
        .appendField(new Blockly.FieldDropdown([['0', 'Button0'], ['1', 'Button1'], ['2', 'Button2'], ['3', 'Button3'], ['4', 'Button4']]), 'BTNS');
    this.setOutput(true, Blockly.Types.BOOLEAN.output);
    this.setTooltip("Get a button state (true or false)");
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  },
};


Blockly.Blocks['mkrIoTCarrier_IMU_Update'] = {
  /**
   * Block for IMU x,y,z
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduino.cc/education/explore-iot-kit');
    this.setColour(Blockly.Blocks.mkrIoTCarrier.HUE);

    this.appendDummyInput()
        .appendField("IMU update")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Sets the XYZ from the current IMU values");
  },
};


Blockly.Blocks['mkrIoTCarrier_IMU'] = {
  /**
   * Block for IMU complementaryRoll, complementaryPitch, complementaryYaw
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduino.cc/education/explore-iot-kit');
    this.setColour(Blockly.Blocks.mkrIoTCarrier.HUE);
    this.appendDummyInput()
        .appendField("IMU axis:")
        .appendField(new Blockly.FieldDropdown([['Roll', 'complementaryRoll'], ['Pitch', 'complementaryPitch'], ['Yaw', 'complementaryYaw']]), 'AXIS');
    this.setOutput(true, Blockly.Types.DECIMAL.output);
    this.setTooltip("Get the roll, pitch or yaw from the imu");
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.DECIMAL;
  },
};

Blockly.Blocks['mkrIoTCarrier_Humidity'] = {
  /**
   * Block for humidity sensor
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduino.cc/education/explore-iot-kit');
    this.setColour(Blockly.Blocks.mkrIoTCarrier.HUE);
    this.appendDummyInput()
        .appendField("Humidity")
    this.setOutput(true, Blockly.Types.DECIMAL.output);
    this.setTooltip("Get Humidity %");
  },
  /** @return {string} The type of return value for the block, an float. */
  getBlockType: function() {
    return Blockly.Types.DECIMAL;
  },
};

Blockly.Blocks['mkrIoTCarrier_Temperature'] = {
  /**
   * Block for humidity sensor
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduino.cc/education/explore-iot-kit');
    this.setColour(Blockly.Blocks.mkrIoTCarrier.HUE);
    this.appendDummyInput()
        .appendField("Temperature")
    this.setOutput(true, Blockly.Types.DECIMAL.output);
    this.setTooltip("Get Temperature C");
  },
  /** @return {string} The type of return value for the block, a float. */
  getBlockType: function() {
    return Blockly.Types.DECIMAL;
  },
};

Blockly.Blocks['mkrIoTCarrier_Pressure'] = {
  /**
   * Block for Barometric sensor
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduino.cc/education/explore-iot-kit');
    this.setColour(Blockly.Blocks.mkrIoTCarrier.HUE);
    this.appendDummyInput()
        .appendField("Pressure")
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setTooltip("Get Temperature hectopascal");
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
};

Blockly.Blocks['mkrIoTCarrier_readColor_Update'] = {
  /**
   * Block for updating APDS9960 ambient light sensor
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduino.cc/education/explore-iot-kit');
    this.setColour(Blockly.Blocks.mkrIoTCarrier.HUE);

    this.appendDummyInput()
        .appendField("Ambient light update")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Update Ambient light color readings");
  },
};


Blockly.Blocks['mkrIoTCarrier_readColor'] = {
  /**
   * Block for APDS9960 ambient light sensor
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduino.cc/education/explore-iot-kit');
    this.setColour(Blockly.Blocks.mkrIoTCarrier.HUE);
    this.appendDummyInput()
        .appendField("Ambiant light chanel:")
        .appendField(new Blockly.FieldDropdown([['r', 'r'], ['g', 'g'], ['b', 'b'], ['intensity', 'light']]), 'CHANEL');
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setTooltip("Get the r, g, or b or light intensity from the APDS9960 sensor");
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
};

Blockly.Blocks['mkrIoTCarrier_Proximity'] = {
    /**
     * Block for reading APDS9960 proximity sensor
     * @this Blockly.Block
     */
    init: function() {
      this.setHelpUrl('https://www.arduino.cc/education/explore-iot-kit');
      this.setColour(Blockly.Blocks.mkrIoTCarrier.HUE);

      this.appendDummyInput()
          .appendField("Proximity Sensor Distance")
      this.setOutput(true, Blockly.Types.NUMBER.output);
      this.setTooltip("0 to 255, where 255 is the furthest. -1 is an error");
    },
    getBlockType: function() {
      return Blockly.Types.NUMBER;
    },
  };
Blockly.Blocks['mkrIoTCarrier_Gesture'] = {
  /**
   * Block for reading APDS9960 Gesture sensor
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduino.cc/education/explore-iot-kit');
    this.setColour(Blockly.Blocks.mkrIoTCarrier.HUE);

    this.appendDummyInput()
        .appendField("Gesture Sensor")
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setTooltip("recogise up, down, left and right gestures");
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
};




Blockly.Blocks['mkrIoTCarrier_Relay'] = {
  /**
   * Block for controlling Relays
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduino.cc/education/explore-iot-kit');
    this.setColour(Blockly.Blocks.mkrIoTCarrier.HUE);
    this.appendDummyInput()
        .appendField("Set Relay number:")
    this.appendValueInput('RELAY_NUMBER')
        .setCheck(Blockly.Types.NUMBER.checkList)
    this.appendDummyInput()
        .appendField("open:")
        .appendField(new Blockly.FieldDropdown([['Open', 'open'], ['Closed', 'close']]), 'STATE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Set one Relay on the IOT Carrier to open or closed");
  },

  onchange: function(event) {
    if (!this.workspace || event.type == Blockly.Events.MOVE ||
        event.type == Blockly.Events.UI) {
      return;  // Block deleted or irrelevant event
    }
    var ID = Blockly.Arduino.valueToCode(
        this, "RELAY_NUMBER", Blockly.Arduino.ORDER_ATOMIC)
    if (ID > 2 || ID < 1 ) {
      this.setWarningText("Relays can only have an ID of 1 or 2", 'mkrIoTCarrier_Relay');
    }  else {
      this.setWarningText(null, 'mkrIoTCarrier_Relay');
    }
  },
};

Blockly.Blocks['mkrIoTCarrier_SetScreenColor'] = {
  /**
   * Block for screen color
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduino.cc/education/explore-iot-kit');
    this.setColour(Blockly.Blocks.mkrIoTCarrier.HUE);
    this.appendDummyInput()
        .appendField("Set Screen Color")
        .appendField(new Blockly.FieldDropdown([['BLACK', 'ST77XX_BLACK'], ['WHITE', 'ST77XX_WHITE'], ['RED', 'ST77XX_RED'], ['GREEN', 'ST77XX_GREEN'], ['BLUE', 'ST77XX_BLUE'], ['CYAN', 'ST77XX_CYAN'], ['MAGENTA', 'ST77XX_MAGENTA'], ['YELLOW', 'ST77XX_YELLOW'], ['ORANGE', 'ST77XX_ORANGE']]), 'COLOR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Sets the screen color");
  },
};

Blockly.Blocks['mkrIoTCarrier_SetScreenText'] = {
  /**
   * Block for screen text
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduino.cc/education/explore-iot-kit');
    this.setColour(Blockly.Blocks.mkrIoTCarrier.HUE);
    this.appendDummyInput()
        .appendField("Text Color:")
        .appendField(new Blockly.FieldDropdown([['BLACK', 'ST77XX_BLACK'], ['WHITE', 'ST77XX_WHITE'], ['RED', 'ST77XX_RED'], ['GREEN', 'ST77XX_GREEN'], ['BLUE', 'ST77XX_BLUE'], ['CYAN', 'ST77XX_CYAN'], ['MAGENTA', 'ST77XX_MAGENTA'], ['YELLOW', 'ST77XX_YELLOW'], ['ORANGE', 'ST77XX_ORANGE']]), 'COLOR');
    this.appendDummyInput()
        .appendField("Size:")
        .appendField(new Blockly.FieldDropdown([['1', '1'], ['2', '2'], ['4', '4'], ['6', '6'], ['8', '8']]), 'SIZE');
    this.appendValueInput('CONTENT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Sets text on the screen");
  },
};