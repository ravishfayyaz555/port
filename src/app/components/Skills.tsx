import React from 'react';
import styles from '../styles/Skills.module.css';

const skills = [
  { name: 'HTML', level: '90%' },
  { name: 'CSS', level: '85%' },
  { name: 'JavaScript', level: '80%' },
  { name: 'TypeScript', level: '75%' },
  { name: 'Next.js', level: '70%' },
  { name: 'Tailwind CSS', level: '80%' },

];

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Skills</h2>
        <div className={styles.skillsList}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skill}>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: skill.level }}
                ></div>
              </div>
              <p className={styles.skillLevel}>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
