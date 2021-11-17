/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

const windowNameArray = window.location.pathname.split('/');
const windowName = windowNameArray[windowNameArray.length - 1];

const selectParticle = (windowName) => {
  switch (windowName) {
    case 'contact.html':
      window.particlesJS.load(
        'particles-js',
        '../../dist/js/particles.json',
        function () {
          console.log('callback - particles.js config loaded');
        }
      );
      break;
    case 'index.html': {
      window.particlesJS.load(
        'particles-js',
        '../../dist/js/particles.json',
        function () {
          console.log('callback - particles.js config loaded');
        }
      );
      break;
    }
    default:
      break;
  }
};

 window.particlesJS.load(
        'particles-js',
        '../../dist/js/particles.json',
        function () {
          console.log('callback - particles.js config loaded');
        }
      );
