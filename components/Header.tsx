import { View, Text } from 'react-native'
import React from 'react'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { createHomeStyles } from '@/assets/styles/home.styles'
import { useTheme } from '@/hooks/useTheme'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

const Header = () => {
    const { colors } = useTheme();
    const styles = createHomeStyles(colors);
    const todos = useQuery(api.todos.getTodos);

    const completedTodos = todos ? todos.filter((todos) => todos.isCompleted).length : 0;
    const totalCount = todos ? todos.length : 0;
    const progressPercentage = totalCount > 0 ? (completedTodos / totalCount) * 100 : 0;




  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <LinearGradient colors={colors.gradients.primary} style={styles.iconContainer}>
            <Ionicons name="flash-outline" size={28} color="#ffffff" />
        </LinearGradient>
        <View style={styles.titleTextContainer}>
            <Text style={styles.title}>Today&apos;s Tasks </Text>
            <Text style={styles.subtitle}>
                {completedTodos} of {totalCount} tasks completed
            </Text>
        </View>
      </View>

      
        <View style={styles.progressContainer}>
            <View style={styles.progressBarContainer}>
                <View style={styles.progressBar}>
                    <LinearGradient 
                        colors={colors.gradients.success}
                        style={[styles.progressFill, { width: `${progressPercentage}%` }]}
                    />
                </View>
                    <Text style={styles.progressText}>{Math.round(progressPercentage)}%</Text>
            </View>
        </View>

    </View>
  )
}

export default Header