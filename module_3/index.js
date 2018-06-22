import UIController from "./ui_controller.js";
import MaskInput from 'mask-input';

// const myUIController = new UIController();


const inputCard = new MaskInput(document.querySelector('#card'), {
    mask: '0000-0000-0000-0000',
    alwaysShowMask: true,
    maskChar: '_',
  });