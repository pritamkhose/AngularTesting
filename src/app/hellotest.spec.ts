// import { TestBed, async } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';

// fdescribe -- for force extcute test
// xdescribe -- for skip extcute test
describe('hellotest', () => {

  it('check if hellotest is hellotest', () => {
    expect('hellotest').toBe('hellotest');
  });
  it('check if hellotest is not hellotest123', () => {
    expect('hellotest').not.toBe('hellotest123');
  });

  let expected = '';
  let notexpected = '';
  let expectMatch = null;
  beforeEach(() => {
    expected = 'expectedTest';
    notexpected = 'notexpectedTest';
    expectMatch = new RegExp('^hello');
  });

  it('check if expectedTest is expectedTest', () => {
    expect('expectedTest').toBe(expected);
  });
  it('check if expectedTest is not expectedTest', () => {
    expect('expectedTest').not.toBe(notexpected);
  });
  it('check if expectMatch', () => {
    expect('helloTest').toMatch(expectMatch);
  });



  afterEach(() => {
    expected = '';
    notexpected = '';
  });

});
