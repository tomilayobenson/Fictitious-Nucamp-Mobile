// import Main from "./screens/MainComponent";
import { ListItem, Icon } from 'react-native-elements';
import { CAMPSITES } from './shared/campsites';
import { View } from 'react-native';

export default function App() {
  // return <Main />
  const list = CAMPSITES;
  return (<View>
    {
      list.map((item, i) => (
        <ListItem key={i} bottomDivider>
          <Icon name={item.icon} />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))
    }
  </View>)
}