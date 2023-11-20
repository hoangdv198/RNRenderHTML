import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';
import RenderHtml, {HTMLContentModel, HTMLElementModel, MixedStyleRecord} from 'react-native-render-html';

const sampleData = require('./sampledata.json');

const renderHTML = () => {
  const {width} = useWindowDimensions();
  const listHtmlSource = [];
  (sampleData as any[]).forEach(item => {
    listHtmlSource.push(getHtmlSource(item.answer));
  });

  const customHTMLElementModels = {
    //  'code': HTMLElementModel.fromCustomModel({
    //   tagName: 'code',
    //   mixedUAStyles: {
    //     color: 'pink',
    //     padding: 4,
    //     backgroundColor: 'red'
    //   },
    //   contentModel: HTMLContentModel.textual
    // })
  };

  const tagsStyles: MixedStyleRecord = {
    code: {
      color: '#e83e8c',
      backgroundColor: 'rgba(27,31,35,.1)',
      paddingLeft: 10,
      fontSize: '85%',
    },
  };
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          paddingHorizontal: 10,
        }}>
          <Text
            style={{
              color: '#e83e8c',
              backgroundColor: 'rgba(27,31,35,.1)',
              paddingLeft: 10,
            }}
          >Test</Text>
        {listHtmlSource.map((source, index) => (
          <RenderHtml
            contentWidth={width}
            source={source}
            tagsStyles={tagsStyles}
            classesStyles={{
                // 'code' : {
                //     color: '#e83e8c',
                //     backgroundColor: 'rgba(27,31,35,.1)',
                //     paddingHorizontal: 2,
                //     paddingVertical: 4,
                //     padding: 8,
                // }
            }}
            customHTMLElementModels={customHTMLElementModels}
            key={index}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default renderHTML;

const styles = StyleSheet.create({});

const getHtmlSource = (html: string) => {
  return {
    html: `<html>
    <head>
        <style>
            body {background-color: powderblue;}
            h1   {color: blue;}
            p    {color: red;}
            code {color: red;}
        </style>
    </head>
    <body>
    ${html}
    </body>
    </html>`,
  };
};
