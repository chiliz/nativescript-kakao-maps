# nativescript-kakao-maps

Development should happen in the following files:

 * `src/kakao-maps.android.ts` for android specific implementation
 * `src/kakao-maps.ios.ts` for ios specific implementation
 * `src/kakao-maps.common.ts` for common functionality

 Native libraries have to be placed in `src/platforms/ios` and `src/platforms/android`

 You can test your plugin by running
 ```
 npm run demo.ios
 ```
 or
 ```
 npm run demo.android
 ```