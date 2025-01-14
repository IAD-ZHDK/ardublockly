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

goog.provide('Blockly.Blocks.smartServos');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.smartServos.HUE = 150;


Blockly.Blocks['smartServos_Setup_MKR1010'] = {
  /**
   * Block for setting up smart servo for MKR1010
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://wiki.lynxmotion.com/info/wiki/lynxmotion/view/lynxmotion-smart-servo/');
    this.setColour(Blockly.Blocks.smartServos.HUE);
    this.appendDummyInput()
        .appendField("SmartServos Setup for MKR1010")
    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },

  onchange: function(event) {
    if (!this.workspace || event.type == Blockly.Events.MOVE ||
        event.type == Blockly.Events.UI) {
      return;  // Block deleted or irrelevant event
    }
  }
};


Blockly.Blocks['smartServos_Setup_SoftwareSerial'] = {
  /**
   * Block for controlling Smart servos by degrees
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://wiki.lynxmotion.com/info/wiki/lynxmotion/view/lynxmotion-smart-servo/');
    this.setColour(Blockly.Blocks.smartServos.HUE);
    this.appendDummyInput()
        .appendField("Setup for non SAMD arduino boards")
    this.appendValueInput('TXPin')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("TX Pin:");
    this.appendValueInput('RXPin')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("RX Pin:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },

  onchange: function(event) {
    if (!this.workspace || event.type == Blockly.Events.MOVE ||
        event.type == Blockly.Events.UI) {
      return;  // Block deleted or irrelevant event
    }
    var MotorID = Blockly.Arduino.valueToCode(
        this, "MotorID", Blockly.Arduino.ORDER_ATOMIC)
    if (MotorID > 254) {
      this.setWarningText("Motor ID can only be up to 253, with 254 broadcasting to all attached motors", 'smartServos_Move_Degrees');
    }  else {
      this.setWarningText(null, 'smartServos_Move_Degrees');
    }
  },
};


Blockly.Blocks['smartServos_Move_Degrees'] = {
  /**
   * Block for controlling Smart servos by degrees
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://wiki.lynxmotion.com/info/wiki/lynxmotion/view/lynxmotion-smart-servo/');
    this.setColour(Blockly.Blocks.smartServos.HUE);
    this.appendDummyInput()
        .appendField("Move by Degrees")
    this.appendValueInput('MotorID')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("ID:");
    this.appendValueInput('Degrees')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("Degrees:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("The ID 254 is a broadcast for all motors");
  },

  onchange: function(event) {
    if (!this.workspace || event.type == Blockly.Events.MOVE ||
        event.type == Blockly.Events.UI) {
      return;  // Block deleted or irrelevant event
    }
    var MotorID = Blockly.Arduino.valueToCode(
        this, "MotorID", Blockly.Arduino.ORDER_ATOMIC)
    if (MotorID > 254) {
      this.setWarningText("Motor ID can only be up to 253, with 254 broadcasting to all attached motors", 'smartServos_Move_Degrees');
    }  else {
      this.setWarningText(null, 'smartServos_Move_Degrees');
    }
  },
};

Blockly.Blocks['smartServos_Move_RPM'] = {
  /**
   * Block for controlling Smart servos by RPM
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://wiki.lynxmotion.com/info/wiki/lynxmotion/view/lynxmotion-smart-servo/');
    this.setColour(Blockly.Blocks.smartServos.HUE);
    this.appendDummyInput()
        .appendField("Move by rotations per minute")
    this.appendValueInput('MotorID')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("ID:");
    this.appendValueInput('RPM')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("RPM:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("The ID 254 is a broadcast for all motors");
  },

  onchange: function(event) {
    if (!this.workspace || event.type == Blockly.Events.MOVE ||
        event.type == Blockly.Events.UI) {
      return;  // Block deleted or irrelevant event
    }
    var MotorID = Blockly.Arduino.valueToCode(
        this, "MotorID", Blockly.Arduino.ORDER_ATOMIC)
    if (MotorID > 254) {
      this.setWarningText("Motor ID can only be up to 253, with 254 broadcasting to all attached motors", 'smartServos_Move_RPM');
    }  else {
      this.setWarningText(null, 'smartServos_Move_RPM');
    }
  },
};


Blockly.Blocks['smartServos_Set_LED'] = {
  /**
   * Block for controlling Smart servos by RPM
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://wiki.lynxmotion.com/info/wiki/lynxmotion/view/lynxmotion-smart-servo/');
    this.setColour(Blockly.Blocks.smartServos.HUE);
    this.appendDummyInput()
        .appendField("Set servo LED")
    this.appendValueInput('MotorID')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("ID:");
    this.appendValueInput('LEDCOLOR')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("LED color:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("The ID 254 is a broadcast for all motors");
  },

  onchange: function(event) {
    if (!this.workspace || event.type == Blockly.Events.MOVE ||
        event.type == Blockly.Events.UI) {
      return;  // Block deleted or irrelevant event
    }
    var LEDCOLOR = Blockly.Arduino.valueToCode(
        this, "LEDCOLOR", Blockly.Arduino.ORDER_ATOMIC)
    if (LEDCOLOR > 7) {
      this.setWarningText("colors can be 0=Off (black); 1=Red 2=Green; 3=Blue; 4=Yellow; 5=Cyan; 6=Magenta; 7=White;", 'smartServos_Set_LED');
    }  else {
      this.setWarningText(null, 'smartServos_Set_LED');
    }
  },
};


Blockly.Blocks['smartServos_Set_NewID'] = {
  /**
   * Block for controlling Smart servos by RPM
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://wiki.lynxmotion.com/info/wiki/lynxmotion/view/lynxmotion-smart-servo/');
    this.setColour(Blockly.Blocks.smartServos.HUE);
    this.appendDummyInput()
        .appendField("Set new ID")
    this.appendValueInput('MotorID')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("ID:");
    this.appendValueInput('NewID')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("new ID:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("The ID 254 is a broadcast for all motors");
  },

  onchange: function(event) {
    if (!this.workspace || event.type == Blockly.Events.MOVE ||
        event.type == Blockly.Events.UI) {
      return;  // Block deleted or irrelevant event
    }
    var MotorID = Blockly.Arduino.valueToCode(
        this, "MotorID", Blockly.Arduino.ORDER_ATOMIC)

        var NewID = Blockly.Arduino.valueToCode(
          this, "NewID", Blockly.Arduino.ORDER_ATOMIC)

    if (MotorID > 254 || NewID > 254) {
      this.setWarningText("Motor ID can only be up to 253, with 254 broadcasting to all attached motors", 'smartServos_Move_RPM');
    }  else {
      this.setWarningText(null, 'smartServos_Move_RPM');
    }
  },
};

