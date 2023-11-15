import React, {useState, useRef, useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

interface ContentTextProps {
  text: string;
  maxLines?: number;
}

const ContentText: React.FC<ContentTextProps> = ({text, maxLines = 3}) => {
  const [showMore, setShowMore] = useState(false);
  //   const [contentHeight, setContentHeight] = useState(0);
  const textRef = useRef<Text>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.measure((x, y, width, height) => {
        // setContentHeight(height);
        setShowMore(height > maxLines * 8); // Assuming each line height is 20 (adjust as needed)
      });
    }
  }, [maxLines, text]);

  const handleToggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <View style={styles.row}>
      <Text
        ref={textRef}
        ellipsizeMode={'clip'}
        numberOfLines={showMore ? maxLines : undefined}>
        {text}
      </Text>
      {showMore && (
        <TouchableOpacity onPress={handleToggleMore}>
          <Text style={styles.blueText}>More...</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ContentText;

const styles = StyleSheet.create({
  blueText: {color: 'blue', marginTop: 5},
  row: {
    marginHorizontal: 24,
    marginVertical: 8,
  },
});
