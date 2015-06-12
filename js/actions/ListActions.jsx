import AppDispatcher from '../dispatcher/AppDispatcher';
import appConstants from '../constants/appConstants';

export default class listActions {

  static addItem(item){
    console.log(item);
    AppDispatcher.handleAction({
      actionType: appConstants.ADD_ITEM,
      data: item
    });
  }

  static removeItem(index){
    AppDispatcher.handleAction({
      actionType: appConstants.REMOVE_ITEM,
      data: index
    })
  }
};