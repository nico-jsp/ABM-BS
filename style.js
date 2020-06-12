import {StyleSheet} from 'react-native';

/*.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}*/
export const customStyle = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#abd',

    //justifyContent: 'center',
  },

  subContainer: {
    //flex: 0.25,
    //measur{50, 25, 15, 30},
    //position: 'absolute',
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Title:{
    marginTop: 30,
    height: 40,
    fontSize: 30,
    alignItems: 'center'
  },

  GeneralText:{
    marginTop:10,
    marginLeft: 30,
    height: 40,

    fontSize: 20
  },

  InputText:{
    marginLeft:15,
    height: 40,
    width: 250,
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 20
  },

  StyleButton:{
    flex: 1,
    marginTop:30,
    color: '#fff',
    borderColor: 'black',
    fontSize: 30
    //position:'absolute'
  }
})


/*.Title {
  text-align:
}

/*@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}*/
