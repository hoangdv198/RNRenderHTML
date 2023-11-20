import {useWindowDimensions} from 'react-native';
import renderHTML from './src/renderHTML';

export default function App() {
  const {width} = useWindowDimensions();
  return renderHTML();
}
