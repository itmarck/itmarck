```javascript
/**
 * Hi, there! I’m a software developer expert on
 * JavaScript with a passion for clean code.
 */
class About extends Me {

  name = 'Marcelo Velasquez'

  get skills() {
    return {
      languages: [ html(), css(), javaScript(), dart(), python() ],
      frameworks: [ vue(), react(), nodeJs(), flutter(), astro() ],
      toolsAndOthers: [ git(), mySql(), docker(), linux(), figma() ],
    }
  }

  get goals() {
    return [ 'English', 'Open source', 'Linux on server', 'AI' ]
  }

  get contact() {
    return {
      web: 'https://itmarck.com',
      twitter: 'https://twitter.com/itmarck',
      personalEmail: 'marceloo.velasquez@hotmail.com',
    }
  }
}

export const itmarck = new About()

```