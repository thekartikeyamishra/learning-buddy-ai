import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { fetchQuiz } from '../utils/api';
import { styles } from '../styles/AppStyles';
import LottieView from 'lottie-react-native';

const QuizScreen = () => {
  const [exam, setExam] = useState('');
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [quizData, setQuizData] = useState(null);

  const handleGenerateQuiz = async () => {
    if (!exam || !subject || !topic) {
      setQuizData({ error: "⚠️ Please fill all fields before generating the quiz." });
      return;
    }

    setLoading(true);
    try {
      const generatedQuiz = await fetchQuiz(exam, subject, topic);
      setQuizData(generatedQuiz);
    } catch (error) {
      console.error("Error fetching AI quiz:", error);
      setQuizData({ error: "❌ Error fetching quiz. Please try again." });
    }
    setLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LottieView source={require('../assets/quiz-animation.json')} autoPlay loop style={styles.animation} />

      <Text style={styles.heading}>🎯 AI-Powered Quiz</Text>

      <TextInput style={styles.input} placeholder="Exam (e.g., JEE, NEET)" value={exam} onChangeText={setExam} />
      <TextInput style={styles.input} placeholder="Subject (e.g., Physics, Math)" value={subject} onChangeText={setSubject} />
      <TextInput style={styles.input} placeholder="Topic (e.g., Algebra, Thermodynamics)" value={topic} onChangeText={setTopic} />

      <TouchableOpacity style={styles.button} onPress={handleGenerateQuiz}>
        <Text style={styles.buttonText}>📚 Generate Quiz</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#6200EE" style={styles.loader} />}

      <View style={styles.outputContainer}>
        {quizData ? (
          quizData.error ? <Text style={styles.errorText}>{quizData.error}</Text> : (
            <>
              <Text style={styles.sectionTitle}>🔥 Important Topics Ranked</Text>
              {Object.entries(quizData.important_topics || {}).map(([topic, rank]) => (
                <Text key={topic} style={styles.responseText}>{topic}: {rank}/10</Text>
              ))}

              <Text style={styles.sectionTitle}>📌 Frequently Asked Topics</Text>
              {quizData.frequent_topics?.map((topic, index) => (
                <Text key={index} style={styles.responseText}>🔹 {topic}</Text>
              ))}

              <Text style={styles.sectionTitle}>📝 Quiz Questions</Text>
              {quizData.questions?.map((q, index) => (
                <View key={index} style={styles.questionContainer}>
                  <Text style={styles.questionText}>{q.question}</Text>
                  {q.options.map((option, i) => (
                    <TouchableOpacity key={i} style={styles.optionButton} onPress={() => alert(option === q.answer ? "✅ Correct!" : "❌ Wrong!")}>
                      <Text style={styles.buttonText}>{option}</Text>
                    </TouchableOpacity>
                  ))}
                  <Text style={styles.explanationText}>💡 {q.explanation}</Text>
                </View>
              ))}

              <Text style={styles.sectionTitle}>⚡ Cheat Codes</Text>
              {quizData.cheat_codes?.map((hack, index) => (
                <Text key={index} style={styles.responseText}>🔹 {hack}</Text>
              ))}
            </>
          )
        ) : <Text style={styles.responseText}>No quiz generated yet.</Text>}
      </View>
    </ScrollView>
  );
};

export default QuizScreen;
