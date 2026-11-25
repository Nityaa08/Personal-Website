// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Framer Motion's whileInView needs IntersectionObserver, which jsdom does not have.
class NoopIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
Object.defineProperty(window, 'IntersectionObserver', { writable: true, value: NoopIntersectionObserver });
Object.defineProperty(global, 'IntersectionObserver', { writable: true, value: NoopIntersectionObserver });
