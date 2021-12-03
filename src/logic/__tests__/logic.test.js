import calculate, { isNumber } from '../calculate';
import operate from '../operate';

describe('operate.js', () => {
  it('Operate("5","10","+") should return "15" ', () => {
    const obj = { total: '5', next: '10', operation: '+' };

    const result = operate(obj.total, obj.next, obj.operation);

    expect(result).toBe('15');
  });

  it('Operate("10","5","-") should return "5" ', () => {
    const obj = { total: '10', next: '5', operation: '-' };

    const result = operate(obj.total, obj.next, obj.operation);

    expect(result).toBe('5');
  });

  it('Operate("10","5","x") should return "50" ', () => {
    const obj = { total: '10', next: '5', operation: 'x' };

    const result = operate(obj.total, obj.next, obj.operation);

    expect(result).toBe('50');
  });

  it('Operate("10","5","÷") should return "2" ', () => {
    const obj = { total: '10', next: '5', operation: '÷' };

    const result = operate(obj.total, obj.next, obj.operation);

    expect(result).toBe('2');
  });

  it('Operate("10","0","÷") should return "Cant divide by 0." ', () => {
    const obj = { total: '10', next: '0', operation: '÷' };

    const result = operate(obj.total, obj.next, obj.operation);

    expect(result).toBe("Can't divide by 0.");
  });

  it('Operate("10","5","%") should return "0" ', () => {
    const obj = { total: '10', next: '5', operation: '%' };

    const result = operate(obj.total, obj.next, obj.operation);

    expect(result).toBe('0');
  });

  it('Operate("10","0","%") should return "Cant modulo by 0." ', () => {
    const obj = { total: '10', next: '0', operation: '%' };

    const result = operate(obj.total, obj.next, obj.operation);

    expect(result).toBe("Can't modulo by 0.");
  });

  it('Operate("10","0","*") should return "Unknown operation *" ', () => {
    const obj = { total: '10', next: '0', operation: '*' };

    const result = operate(obj.total, obj.next, obj.operation);

    expect(result).toBe(`Unknown operation '${obj.operation}'`);
  });
});

describe('calculate.js', () => {
  it('IsNumber() should return true if the input is a number', () => {
    expect(isNumber('1')).toBeTruthy();
  });

  it('IsNumber() should return false when input is not number', () => {
    expect(isNumber('z')).not.toBeTruthy();
  });

  it('calculate({operation, next}, buttonName=AC) should return { total: null, next: null, operation: null }', () => {
    const buttonName = 'AC';
    const obj = { total: 0, next: 0, operation: null };

    const result = calculate(obj, buttonName);

    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('calculate({operation, next:0}, buttonName=0) should return {}', () => {
    const buttonName = '0';
    const obj = { total: null, next: '0', operation: null };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({});
  });

  it('calculate({operation, next}, buttonName) should override obj.next: obj.next+buttonName', () => {
    const buttonName = '5';
    const obj = { total: null, next: '3', operation: '+' };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({ ...obj, next: obj.next + buttonName });
  });

  it('calculate({operation, !next}, buttonName) should override obj.next: buttonName', () => {
    const buttonName = '5';
    const obj = { total: null, next: null, operation: '+' };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({ ...obj, next: buttonName });
  });

  it('calculate({!operation, next}, buttonName) should return next: obj.next + buttonName', () => {
    const buttonName = '5';
    const obj = { total: null, next: '7', operation: null };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({ total: null, next: obj.next + buttonName });
  });

  it('calculate({!operation, !next}, buttonName) should return next: buttonName', () => {
    const buttonName = '5';
    const obj = { total: null, next: null, operation: null };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({ next: buttonName, total: null });
  });

  it('calculate({next.includes(".")}, buttonName=".") should return same object', () => {
    const buttonName = '.';
    const obj = { total: null, next: '5.3', operation: null };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual(obj);
  });

  it('calculate({!next.includes(".")}, buttonName=".") should override next, obj.next+"."', () => {
    const buttonName = '.';
    const obj = { total: null, next: '53', operation: null };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({ ...obj, next: obj.next + buttonName });
  });

  it('calculate({operation}, buttonName=".") should return { next: "0." }', () => {
    const buttonName = '.';
    const obj = { total: null, next: null, operation: '+' };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({ next: 0 + buttonName });
  });

  it('calculate({total.includes(".")}, buttonName=".") should return {}', () => {
    const buttonName = '.';
    const obj = { total: '4.3', next: null, operation: null };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({});
  });

  it('calculate({!total.includes(".")}, buttonName=".") should return { total: "total." }', () => {
    const buttonName = '.';
    const obj = { total: '43', next: null, operation: null };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({ total: `${obj.total}.` });
  });

  it('calculate({!total}, buttonName=".") should return { total: "total." }', () => {
    const buttonName = '.';
    const obj = { total: null, next: null, operation: null };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({ total: 0 + buttonName });
  });

  it('calculate({next:"5", total:"10", operation:"-"}, buttonName="=") should return { total: "5" }', () => {
    const buttonName = '=';
    const obj = { total: '10', next: '5', operation: '-' };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({ next: null, total: '5', operation: null });
  });

  it('calculate({next:"5", total:"10", operation:null}, buttonName="=") should return {}', () => {
    const buttonName = '=';
    const obj = { total: '10', next: '5', operation: null };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({});
  });

  it('calculate({next}, buttonName="+/-") should override next: -obj.next', () => {
    const buttonName = '+/-';
    const obj = { total: '10', next: '5', operation: null };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({
      ...obj,
      next: (-1 * parseFloat(obj.next)).toString(),
    });
  });

  it('calculate({total}, buttonName="+/-") should override total: -obj.total', () => {
    const buttonName = '+/-';
    const obj = { total: '10', next: null, operation: null };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({
      ...obj,
      total: (-1 * parseFloat(obj.total)).toString(),
    });
  });

  it('calculate({!next, !total}, buttonName="+/-") should return {}', () => {
    const buttonName = '+/-';
    const obj = { total: null, next: null, operation: null };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({});
  });

  it('calculate({!next, !total}, buttonName="+") should return {}', () => {
    const buttonName = '+';
    const obj = { total: null, next: null, operation: null };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({});
  });

  it('calculate({!next, total, !operation}, buttonName="+") should override operation: buttonName', () => {
    const buttonName = '+';
    const obj = { total: '5', next: null, operation: null };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({ ...obj, operation: buttonName });
  });

  it('calculate({!next, total, operation}, buttonName="+") should override operation: buttonName', () => {
    const buttonName = '+';
    const obj = { total: '5', next: null, operation: '-' };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({ ...obj, operation: buttonName });
  });

  it('calculate({next, total, operation}, buttonName="+") should override operation: buttonName', () => {
    const buttonName = '+';
    const obj = { total: '5', next: '34', operation: '-' };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({
      total: '-29',
      next: null,
      operation: buttonName,
    });
  });
});
