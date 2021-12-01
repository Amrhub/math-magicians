import calculate, { isNumber } from '../calculate';

describe('calculate.js', () => {
  it('IsNumber() should return true if the input is a number', () => {
    expect(isNumber('1')).toBeTruthy();
  });

  it('IsNumber() should return false when input is not number', () => {
    expect(isNumber('z')).not.toBeTruthy();
  });

  it('calculate() should return null values of object when second param is "AC" ', () => {
    const buttonName = 'AC';
    const obj = { total: 0, next: 0, operation: null };

    const result = calculate(obj, buttonName);

    expect(result).toEqual({ total: null, next: null, operation: null });
  });
});

// number
// if pass zero when we already had zero in next return empty object
// if there is a operation 
   // if there's a obj.next 
      // concat the obj.next with the number
  // else no obj.next
      // set obj.next to the number

// else no operation
  // if there's a obj.next
    // concat the obj.next with the number
  // else no obj.next
    // set obj.next to the number

// buttonName = "."
  // if there's a obj.next
    // if it includes a dot
      // return same object
    // else
      // concat the obj.next with the buttonName ('.') 

  // if there's operation
    // return { next: '0.' }

  // if we have total
    // includes a dot return {}
    // doesn't include a dot return { total: 'total.' }

  // if we have no total
    // return { total: '0.' }

  // if buttonName = "="
    // if obj.next and obj.operation
      // { total: call calculate(obj.total, obj.next, obj.operation) 
          // next: null
          // operation: null
        // }
    // else no operation 
      // return {}

  // if buttonName = "+/-" 
    // if obj.next
      // return the obj and override the negative of next
    // if obj.total
      // return the obj and override the negative of total
    // else no obj.next or obj.total
      // return {}

  // if we have operation
    // if no obj.next or obj.total
      // return {}

  // User pressed an operation after pressing '='
    // return obj and override the operation

  // User pressed an operation button and there is an existing operation
    // if we have total and no next
      // return obj and override the operation
    // if we have total and next
      // return { total: call calculate(obj.total, obj.next, obj.operation)
        // next: null
        // operation: buttonName
      // }

      