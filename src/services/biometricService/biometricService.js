import TouchID from 'react-native-touch-id';
import colors from '../../Assets/colors/colors';

export const checkBiometricSupportednEnrolled = async (changeissupported) => {
   const optionalConfigObject = {
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false // if true is passed, itwill allow isSupported to return an error if the device is not enrolled in touch id/face id etc. Otherwise, it will just tell you what method is supported, even if the user is not enrolled.  (default false)
}
 
TouchID.isSupported(optionalConfigObject)
  .then(biometryType => {
      console.log("biometryType:",biometryType);
      if(biometryType == 'FaceID'){
        Authenticate();
      }
      changeissupported(biometryType);
  })
  .catch(error => {
    // Failure code
    console.log('error:',error);
    changeissupported(false);
  });
}
export const Authenticate = async (changetouchid) =>{
    const optionalConfigObject = {
        title: 'Verify Your Identity', // Android
        imageColor: colors.primary, // Android
        imageErrorColor: colors.primary, // Android
        sensorDescription: 'Touch the fingerprint sensor', // Android
        sensorErrorDescription: 'Not recognized', // Android
        cancelText: 'Cancel', // Android
        fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
        unifiedErrors: false, // use unified error messages (default false)
        passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
      };
       
      TouchID.authenticate('Use your fingerprint to verify your identity', optionalConfigObject)
        .then(success => {
          console.log('success:',success)
          changetouchid();
        })
        .catch(error => {
            console.log('error:',error)
        });
}