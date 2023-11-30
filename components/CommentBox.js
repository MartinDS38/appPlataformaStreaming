import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

import styles from './styles';

const CommentBox = () => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleAddComment = () => {
        if (comment.trim() !== '') {
            setComments(prevComments => [...prevComments, comment]);
            setComment('');
        }
    };

    return (
        <View style={styles.commentsContainer}>
            <View style={styles.commentInputContainer}>
                <TextInput
                    style={styles.commentInput}
                    placeholder="Escribe un comentario..."
                    value={comment}
                    onChangeText={text => setComment(text)}
                />
                <Button title="Comentar" onPress={handleAddComment} />
            </View>
            <Text style={styles.titulo}>Comentarios</Text>
            <ScrollView style={styles.commentBox}>
                {comments.map((comment, index) => (
                    <Text key={index} style={styles.commentItem}>
                        {comment}
                    </Text>
                ))}
            </ScrollView>
        </View>
    );
};

export default CommentBox;