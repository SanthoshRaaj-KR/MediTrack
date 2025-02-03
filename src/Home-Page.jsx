import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./home-page.css";

 export default function Home_page(){
  const [displayedText, setDisplayedText] = useState(""); 
  const [wordIndex, setWordIndex] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false); 

  const words = ["Drug Analysis", "Drug Diagnosis", "Personal Tracker"];
  const typingSpeed = 70;
  const deletingSpeed = 50;
  const delayBetweenWords = 1500;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      
      console.log({
        currentWord,
        displayedText,
        wordIndex,
        isDeleting
      });

      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        } else {
          // Finished typing, start delay before deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, delayBetweenWords);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    // Set up the interval for typing/deleting
    const typingTimer = setTimeout(handleTyping, 
      isDeleting ? deletingSpeed : typingSpeed
    );

    // Clean up the timer
    return () => clearTimeout(typingTimer);
  }, [displayedText, wordIndex, isDeleting]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      className="container"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="heading" class="ml-100 text-7xl text-slate-700 font-extrabold"
      >
        MediTrack
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="helper-text" class=" text-3xl mt-20 text-slate-700 font-serif ml-20"
      >
        Hi there, how can I help you 
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="typing-text"
      >
        <span className="typing-animation" class= "text-3xl mt-20 text-slate-700 font-serif ml-20">{displayedText}</span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="text" class="text-3xl font-serif text-slate-700 mr-16 ml-16 mt-60"
      >
        MediTrack is your smart healthcare companion, helping you manage medications effortlessly.
        It provides detailed drug information, including uses, side effects, and interactions.
        Track your prescriptions, set reminders, and stay on top of your medication schedule.
        Get symptom-based insights to understand potential conditions and suitable treatments.
        Stay informed, stay healthy with MediTrack!
      </motion.p>
    </motion.div>
  );
}

