import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { motion } from 'framer-motion';

const gameData = {
  "Motorisch-funktioneller Bereich": [
    {
      name: "Emma Müller, 42 Jahre, Rheumatoide Arthritis, Ergotherapie-Praxis",
      questions: [
        {
          question: "Welcher Ansatz würde sich primär auf die Verbesserung der Gelenkbeweglichkeit in Emmas Händen konzentrieren?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung der Gelenkbeweglichkeit als grundlegende Körperfunktion konzentrieren, bevor er sich komplexeren Aktivitäten zuwendet."
        },
        {
          question: "Welcher Ansatz würde mit der Frage beginnen: 'Welche täglichen Aktivitäten sind für Sie am wichtigsten, Emma?'",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz beginnt mit der Identifikation bedeutungsvoller Aktivitäten für den Klienten und arbeitet von dort aus rückwärts zu den benötigten Funktionen."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut zuerst einen standardisierten Handkrafttest durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde typischerweise mit standardisierten Tests beginnen, um spezifische Funktionsdefizite zu identifizieren."
        },
        {
          question: "Welcher Ansatz würde sich darauf konzentrieren, Emma beizubringen, wie sie Hilfsmittel beim Kochen einsetzen kann?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde sich auf die Anpassung von Alltagsaktivitäten und den Einsatz von Hilfsmitteln konzentrieren, um die Teilhabe zu ermöglichen."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut zuerst ein detailliertes Gelenkschutztraining durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf grundlegende Techniken wie Gelenkschutz konzentrieren, bevor er zu komplexeren Aktivitäten übergeht."
        },
        {
          question: "Welcher Ansatz würde Emma bitten, eine typische Alltagsaktivität wie das Zubereiten einer Mahlzeit vorzuführen?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde mit der Beobachtung einer komplexen Alltagsaktivität beginnen, um Problembereiche zu identifizieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut zuerst ein gezieltes Handmuskeltraining durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender Funktionen wie Muskelkraft konzentrieren, bevor er zu Aktivitäten übergeht."
        }
      ]
    },
    {
      name: "Liam Schmidt, 28 Jahre, Komplexe Handverletzung nach Arbeitsunfall, Rehaklinik",
      questions: [
        {
          question: "Welcher Ansatz würde zuerst die Narbenbehandlung und Ödemreduktion fokussieren?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich zunächst auf die grundlegenden physiologischen Aspekte wie Narbenmanagement und Ödemreduktion konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut Liam fragen: 'Welche Tätigkeiten in Ihrem Beruf sind am wichtigsten für Sie?'",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz beginnt mit der Identifikation bedeutungsvoller Aktivitäten, insbesondere im beruflichen Kontext."
        },
        {
          question: "Welcher Ansatz würde primär ein spezifisches Fingerbewegungs-Training durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender Funktionen wie Fingerbeweglichkeit konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut Liam bitten, eine typische Arbeitsaufgabe zu simulieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde mit der Beobachtung komplexer, berufsbezogener Aktivitäten beginnen, um Problembereiche zu identifizieren."
        },
        {
          question: "Welcher Ansatz würde zuerst standardisierte Tests zur Handkraft und Sensibilität durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde typischerweise mit standardisierten Tests beginnen, um spezifische Funktionsdefizite zu quantifizieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut die Anpassung von Werkzeugen oder Arbeitsabläufen priorisieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde sich auf die Anpassung von Arbeitsaktivitäten und den Einsatz von modifizierten Werkzeugen konzentrieren."
        },
        {
          question: "Welcher Ansatz würde zunächst ein intensives Krafttraining für die betroffene Hand vorsehen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender Funktionen wie Muskelkraft konzentrieren, bevor er zu komplexeren Aktivitäten übergeht."
        }
      ]
    },
    {
      name: "Helga Weber, 75 Jahre, Hüft-TEP nach Oberschenkelhalsbruch, Ambulante Reha",
      questions: [
        {
          question: "Welcher Ansatz würde primär mit Übungen zur Verbesserung der Hüftbeweglichkeit beginnen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich zunächst auf die Verbesserung der Gelenkbeweglichkeit als grundlegende Körperfunktion konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut fragen: 'Welche Aktivitäten in Ihrem Haushalt sind Ihnen am wichtigsten, Frau Weber?'",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz beginnt mit der Identifikation bedeutungsvoller Alltagsaktivitäten für den Klienten."
        },
        {
          question: "Welcher Ansatz würde zuerst ein spezifisches Gleichgewichtstraining durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender Funktionen wie Gleichgewicht konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut Frau Weber bitten, das Ankleiden oder die Badezimmernutzung zu demonstrieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde mit der Beobachtung komplexer Alltagsaktivitäten beginnen, um Problembereiche zu identifizieren."
        },
        {
          question: "Welcher Ansatz würde zuerst einen standardisierten Mobilitätstest durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde typischerweise mit standardisierten Tests beginnen, um spezifische Funktionsdefizite zu quantifizieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut die Anpassung des Badezimmers oder der Küche priorisieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde sich auf die Anpassung der Wohnumgebung konzentrieren, um die Teilhabe an Alltagsaktivitäten zu ermöglichen."
        },
        {
          question: "Welcher Ansatz würde zunächst ein intensives Krafttraining für die Beinmuskulatur vorsehen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender Funktionen wie Muskelkraft konzentrieren, bevor er zu komplexeren Aktivitäten übergeht."
        }
      ]
    }
  ],
  "Neurophysiologischer Bereich": [
    {
      name: "Karl Bauer, 68 Jahre, Schlaganfall mit Hemiparese rechts, Stroke Unit / Anschließend Rehaklinik",
      questions: [
        {
          question: "Welcher Ansatz würde primär mit Übungen zur Normalisierung des Muskeltonus beginnen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich zunächst auf die Verbesserung grundlegender neurophysiologischer Funktionen wie den Muskeltonus konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut fragen: 'Welche Aktivitäten möchten Sie wieder selbstständig durchführen können, Herr Bauer?'",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz beginnt mit der Identifikation bedeutungsvoller Alltagsaktivitäten für den Klienten."
        },
        {
          question: "Welcher Ansatz würde zuerst ein spezifisches Propriozeptionstraining durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender sensorischer Funktionen wie Propriozeption konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut Herrn Bauer bitten, eine Alltagsaktivität wie das Anziehen eines Hemdes zu demonstrieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde mit der Beobachtung komplexer Alltagsaktivitäten beginnen, um Problembereiche zu identifizieren."
        },
        {
          question: "Welcher Ansatz würde zuerst einen standardisierten Test zur Arm- und Handfunktion durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde typischerweise mit standardisierten Tests beginnen, um spezifische Funktionsdefizite zu quantifizieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut die Anpassung von Alltagsgegenständen oder der Wohnumgebung priorisieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde sich auf die Anpassung der Umgebung und von Hilfsmitteln konzentrieren, um die Teilhabe an Alltagsaktivitäten zu ermöglichen."
        },
        {
          question: "Welcher Ansatz würde zunächst ein intensives Training zur Förderung selektiver Bewegungen vorsehen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender motorischer Funktionen wie selektive Bewegungen konzentrieren, bevor er zu komplexeren Aktivitäten übergeht."
        }
      ]
    },
    {
      name: "Sophie Neumann, 35 Jahre, Multiple Sklerose, Neurologische Fachklinik",
      questions: [
        {
          question: "Welcher Ansatz würde primär mit Übungen zur Verbesserung der Koordination beginnen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich zunächst auf die Verbesserung grundlegender neurophysiologischer Funktionen wie Koordination konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut fragen: 'Welche beruflichen oder Freizeitaktivitäten sind Ihnen am wichtigsten, Frau Neumann?'",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz beginnt mit der Identifikation bedeutungsvoller Aktivitäten für den Klienten, einschließlich Beruf und Freizeit."
        },
        {
          question: "Welcher Ansatz würde zuerst ein spezifisches Fatigue-Management-Training durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender Funktionen wie Energiemanagement konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut Frau Neumann bitten, eine typische Arbeitssituation oder ein Hobby zu simulieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde mit der Beobachtung komplexer, bedeutungsvoller Aktivitäten beginnen, um Problembereiche zu identifizieren."
        },
        {
          question: "Welcher Ansatz würde zuerst einen standardisierten Test zur Handfunktion und Feinmotorik durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde typischerweise mit standardisierten Tests beginnen, um spezifische Funktionsdefizite zu quantifizieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut die Anpassung des Arbeitsplatzes oder von Freizeitaktivitäten priorisieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde sich auf die Anpassung von Aktivitäten und der Umgebung konzentrieren, um die Teilhabe zu ermöglichen."
        },
        {
          question: "Welcher Ansatz würde zunächst ein intensives Training zur Verbesserung der posturalen Kontrolle vorsehen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender Funktionen wie posturale Kontrolle konzentrieren, bevor er zu komplexeren Aktivitäten übergeht."
        }
      ]
    },
    {
      name: "Tim Hoffmann, 19 Jahre, Schädel-Hirn-Trauma nach Verkehrsunfall, Intensivstation / Anschließend Rehazentrum für Jugendliche",
      questions: [
        {
          question: "Welcher Ansatz würde primär mit sensorischer Stimulation und Wahrnehmungsübungen beginnen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich zunächst auf die Verbesserung grundlegender sensorischer Funktionen und Wahrnehmung konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut fragen: 'Welche Aktivitäten sind für dich als Jugendlicher besonders wichtig, Tim?'",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz beginnt mit der Identifikation bedeutungsvoller Aktivitäten für den Klienten, unter Berücksichtigung seines Alters und seiner Interessen."
        },
        {
          question: "Welcher Ansatz würde zuerst ein spezifisches Training zur Aufmerksamkeitssteuerung durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender kognitiver Funktionen wie Aufmerksamkeit konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut Tim bitten, eine für ihn typische Freizeitaktivität oder Schulaufgabe zu demonstrieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde mit der Beobachtung komplexer, altersgerechter Aktivitäten beginnen, um Problembereiche zu identifizieren."
        },
        {
          question: "Welcher Ansatz würde zuerst einen standardisierten Test zur kognitiven Leistungsfähigkeit durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde typischerweise mit standardisierten Tests beginnen, um spezifische kognitive Defizite zu quantifizieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut die Anpassung des Lernumfelds oder von Freizeitaktivitäten priorisieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde sich auf die Anpassung von Aktivitäten und der Umgebung konzentrieren, um die Teilhabe in Schule und Freizeit zu ermöglichen."
        },
        {
          question: "Welcher Ansatz würde zunächst ein intensives Training zur Verbesserung der Exekutivfunktionen vorsehen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender kognitiver Funktionen wie Exekutivfunktionen konzentrieren, bevor er zu komplexeren Aktivitäten übergeht."
        }
      ]
    }
  ],
  "Neuropsychologischer Bereich": [
    {
      name: "Gisela Klein, 82 Jahre, Alzheimer-Demenz im Frühstadium, Seniorenwohnheim",
      questions: [
        {
          question: "Welcher Ansatz würde primär mit Gedächtnisübungen und kognitiven Trainingseinheiten beginnen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich zunächst auf die Verbesserung grundlegender kognitiver Funktionen wie Gedächtnis konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut fragen: 'Welche täglichen Aktivitäten sind Ihnen am wichtigsten, Frau Klein?'",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz beginnt mit der Identifikation bedeutungsvoller Alltagsaktivitäten für den Klienten."
        },
        {
          question: "Welcher Ansatz würde zuerst ein spezifisches Orientierungstraining im Wohnheim durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender Funktionen wie räumliche Orientierung konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut Frau Klein bitten, eine Routineaktivität wie das Zubereiten einer einfachen Mahlzeit zu demonstrieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde mit der Beobachtung komplexer Alltagsaktivitäten beginnen, um Problembereiche zu identifizieren."
        },
        {
          question: "Welcher Ansatz würde zuerst einen standardisierten Test zur kognitiven Leistungsfähigkeit durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde typischerweise mit standardisierten Tests beginnen, um spezifische kognitive Defizite zu quantifizieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut die Anpassung der Wohnumgebung und den Einsatz von Erinnerungshilfen priorisieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde sich auf die Anpassung der Umgebung und den Einsatz von Hilfsmitteln konzentrieren, um die Teilhabe an Alltagsaktivitäten zu ermöglichen."
        },
        {
          question: "Welcher Ansatz würde zunächst ein intensives Training zur Verbesserung der Aufmerksamkeit vorsehen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender kognitiver Funktionen wie Aufmerksamkeit konzentrieren, bevor er zu komplexeren Aktivitäten übergeht."
        }
      ]
    },
    {
      name: "Markus Wagner, 45 Jahre, Kognitive Defizite nach Hirntumor-OP, Ambulante neuropsychologische Reha",
      questions: [
        {
          question: "Welcher Ansatz würde primär mit Übungen zur Verbesserung der Informationsverarbeitungsgeschwindigkeit beginnen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich zunächst auf die Verbesserung grundlegender kognitiver Funktionen wie Informationsverarbeitung konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut fragen: 'Welche beruflichen und familiären Aktivitäten möchten Sie wieder aufnehmen, Herr Wagner?'",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz beginnt mit der Identifikation bedeutungsvoller Aktivitäten für den Klienten, einschließlich Beruf und Familie."
        },
        {
          question: "Welcher Ansatz würde zuerst ein spezifisches Training des Arbeitsgedächtnisses durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender kognitiver Funktionen wie Arbeitsgedächtnis konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut Herrn Wagner bitten, eine typische Arbeitssituation oder Familienaktivität zu simulieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde mit der Beobachtung komplexer, bedeutungsvoller Aktivitäten beginnen, um Problembereiche zu identifizieren."
        },
        {
          question: "Welcher Ansatz würde zuerst einen standardisierten Test zu Exekutivfunktionen durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde typischerweise mit standardisierten Tests beginnen, um spezifische kognitive Defizite zu quantifizieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut die Anpassung des Arbeitsplatzes und die Entwicklung von Kompensationsstrategien priorisieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde sich auf die Anpassung von Aktivitäten und der Umgebung sowie die Entwicklung von Strategien konzentrieren, um die Teilhabe zu ermöglichen."
        },
        {
          question: "Welcher Ansatz würde zunächst ein intensives Training zur Verbesserung der kognitiven Flexibilität vorsehen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender kognitiver Funktionen wie kognitive Flexibilität konzentrieren, bevor er zu komplexeren Aktivitäten übergeht."
        }
      ]
    },
    {
      name: "Jana Peters, 31 Jahre, ADHS (Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung), Ergotherapie-Praxis",
      questions: [
        {
          question: "Welcher Ansatz würde primär mit Übungen zur Verbesserung der Aufmerksamkeitssteuerung beginnen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich zunächst auf die Verbesserung grundlegender kognitiver Funktionen wie Aufmerksamkeitssteuerung konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut fragen: 'In welchen Lebensbereichen möchten Sie Ihre ADHS-Symptome am meisten reduzieren, Frau Peters?'",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz beginnt mit der Identifikation bedeutungsvoller Aktivitäten und Lebensbereiche für den Klienten."
        },
        {
          question: "Welcher Ansatz würde zuerst ein spezifisches Training zur Impulskontrolle durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender Funktionen wie Impulskontrolle konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut Frau Peters bitten, eine herausfordernde Alltagssituation (z.B. Arbeit oder Haushalt) zu simulieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde mit der Beobachtung komplexer, bedeutungsvoller Aktivitäten beginnen, um Problembereiche zu identifizieren."
        },
        {
          question: "Welcher Ansatz würde zuerst einen standardisierten Test zur Aufmerksamkeit und exekutiven Funktionen durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde typischerweise mit standardisierten Tests beginnen, um spezifische kognitive Defizite zu quantifizieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut die Entwicklung von Organisationsstrategien und die Anpassung des Arbeits-/Lernumfelds priorisieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde sich auf die Entwicklung von Strategien und die Anpassung der Umgebung konzentrieren, um die Teilhabe in verschiedenen Lebensbereichen zu verbessern."
        },
        {
          question: "Welcher Ansatz würde zunächst ein intensives Training zur Verbesserung des Arbeitsgedächtnisses vorsehen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender kognitiver Funktionen wie Arbeitsgedächtnis konzentrieren, bevor er zu komplexeren Aktivitäten übergeht."
        }
      ]
    }
  ],
  "Psychosozialer Bereich": [
    {
      name: "Felix Richter, 22 Jahre, Schizophrenie, Psychiatrische Tagesklinik",
      questions: [
        {
          question: "Welcher Ansatz würde primär mit Übungen zur Realitätsorientierung und Wahrnehmungsschulung beginnen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich zunächst auf die Verbesserung grundlegender kognitiver Funktionen wie Realitätsorientierung konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut fragen: 'Welche Alltagsaktivitäten und sozialen Kontakte sind Ihnen am wichtigsten, Herr Richter?'",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz beginnt mit der Identifikation bedeutungsvoller Aktivitäten und sozialer Beziehungen für den Klienten."
        },
        {
          question: "Welcher Ansatz würde zuerst ein spezifisches Training zur Verbesserung der Körperwahrnehmung durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender Funktionen wie Körperwahrnehmung konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut Felix bitten, eine soziale Interaktion oder Alltagsaktivität zu simulieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde mit der Beobachtung komplexer, bedeutungsvoller Aktivitäten beginnen, um Problembereiche zu identifizieren."
        },
        {
          question: "Welcher Ansatz würde zuerst einen standardisierten Test zur sozialen Kognition durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde typischerweise mit standardisierten Tests beginnen, um spezifische Defizite zu quantifizieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut die Entwicklung von Bewältigungsstrategien für Alltagssituationen und soziale Interaktionen priorisieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde sich auf die Entwicklung von Strategien konzentrieren, um die Teilhabe in verschiedenen Lebensbereichen zu verbessern."
        },
        {
          question: "Welcher Ansatz würde zunächst ein intensives Training zur Verbesserung der Emotionsregulation vorsehen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender Funktionen wie Emotionsregulation konzentrieren, bevor er zu komplexeren Aktivitäten übergeht."
        }
      ]
    },
    {
      name: "Monika Schulz, 54 Jahre, Depression und Angststörung, Psychosomatische Klinik",
      questions: [
        {
          question: "Welcher Ansatz würde primär mit Entspannungsübungen und Achtsamkeitstraining beginnen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich zunächst auf die Verbesserung grundlegender Funktionen wie Stressregulation konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut fragen: 'Welche Aktivitäten würden Sie gerne wieder aufnehmen, um Ihre Lebensqualität zu verbessern, Frau Schulz?'",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz beginnt mit der Identifikation bedeutungsvoller Aktivitäten, die zur Verbesserung der Lebensqualität beitragen können."
        },
        {
          question: "Welcher Ansatz würde zuerst ein spezifisches Training zur Verbesserung der Selbstwahrnehmung durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender Funktionen wie Selbstwahrnehmung konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut Frau Schulz bitten, eine angstauslösende Situation zu beschreiben oder zu simulieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde mit der Beobachtung oder Beschreibung komplexer, bedeutungsvoller Situationen beginnen, um Problembereiche zu identifizieren."
        },
        {
          question: "Welcher Ansatz würde zuerst einen standardisierten Test zur Erfassung von Depressions- und Angstsymptomen durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde typischerweise mit standardisierten Tests beginnen, um spezifische Symptome zu quantifizieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut die Entwicklung von Bewältigungsstrategien für den Arbeitsalltag und soziale Situationen priorisieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde sich auf die Entwicklung von Strategien konzentrieren, um die Teilhabe in verschiedenen Lebensbereichen zu verbessern."
        },
        {
          question: "Welcher Ansatz würde zunächst ein intensives Training zur Verbesserung der kognitiven Umstrukturierung negativer Gedankenmuster vorsehen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender kognitiver Funktionen wie Gedankenmuster konzentrieren, bevor er zu komplexeren Aktivitäten übergeht."
        }
      ]
    },
    {
      name: "Ahmed Yilmaz, 38 Jahre, Alkoholabhängigkeit in Reha, Suchtrehabilitationsklinik",
      questions: [
        {
          question: "Welcher Ansatz würde primär mit Übungen zur Impulskontrolle und Frustrationstoleranz beginnen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich zunächst auf die Verbesserung grundlegender Funktionen wie Impulskontrolle konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut fragen: 'Welche alkoholfreien Aktivitäten und Beziehungen möchten Sie in Ihrem Leben stärken, Herr Yilmaz?'",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz beginnt mit der Identifikation bedeutungsvoller, suchtfreier Aktivitäten und Beziehungen für den Klienten."
        },
        {
          question: "Welcher Ansatz würde zuerst ein spezifisches Training zur Verbesserung der Selbstregulation durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender Funktionen wie Selbstregulation konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut Ahmed bitten, eine typische Risikosituation für Alkoholkonsum zu simulieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde mit der Beobachtung oder Simulation komplexer, bedeutungsvoller Situationen beginnen, um Problembereiche zu identifizieren."
        },
        {
          question: "Welcher Ansatz würde zuerst einen standardisierten Test zur Erfassung von Suchtverhalten und Rückfallrisiko durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde typischerweise mit standardisierten Tests beginnen, um spezifische Verhaltensweisen und Risiken zu quantifizieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut die Entwicklung von Bewältigungsstrategien für Risikosituationen und die Gestaltung eines suchtfreien Alltags priorisieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde sich auf die Entwicklung von Strategien konzentrieren, um die Teilhabe in verschiedenen Lebensbereichen ohne Suchtmittel zu verbessern."
        },
        {
          question: "Welcher Ansatz würde zunächst ein intensives Training zur Verbesserung der Stresstoleranz vorsehen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender Funktionen wie Stresstoleranz konzentrieren, bevor er zu komplexeren Aktivitäten übergeht."
        }
      ]
    }
  ],
  "Arbeitstherapeutischer Bereich": [
    {
      name: "Sabine Fischer, 49 Jahre, Burnout-Syndrom, Berufliches Trainingszentrum",
      questions: [
        {
          question: "Welcher Ansatz würde primär mit Übungen zur Stressreduktion und Achtsamkeit beginnen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich zunächst auf die Verbesserung grundlegender Funktionen wie Stressmanagement konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut fragen: 'Welche Aspekte Ihrer beruflichen Tätigkeit möchten Sie wieder aufnehmen oder anpassen, Frau Fischer?'",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz beginnt mit der Identifikation bedeutungsvoller beruflicher Aktivitäten und möglicher Anpassungen für den Klienten."
        },
        {
          question: "Welcher Ansatz würde zuerst ein spezifisches Training zur Verbesserung der Zeitmanagement-Fähigkeiten durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender Funktionen wie Zeitmanagement konzentrieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut Frau Fischer bitten, eine typische Arbeitssituation zu simulieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde mit der Beobachtung oder Simulation komplexer, berufsbezogener Situationen beginnen, um Problembereiche zu identifizieren."
        },
        {
          question: "Welcher Ansatz würde zuerst einen standardisierten Test zur Erfassung von Burnout-Symptomen und Arbeitsfähigkeit durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde typischerweise mit standardisierten Tests beginnen, um spezifische Symptome und Fähigkeiten zu quantifizieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut die Entwicklung von Strategien zur Work-Life-Balance und die Anpassung des Arbeitsplatzes priorisieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde sich auf die Entwicklung von Strategien und Anpassungen konzentrieren, um die berufliche Teilhabe zu verbessern und ein Gleichgewicht zu finden."
        },
        {
          question: "Welcher Ansatz würde zunächst ein intensives Training zur Verbesserung der Selbstfürsorge und Grenzsetzung vorsehen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender Fähigkeiten wie Selbstfürsorge konzentrieren, bevor er zu komplexeren beruflichen Aktivitäten übergeht."
        }
      ]
    },
    {
      name: "Thomas Krause, 36 Jahre, Querschnittslähmung nach Unfall, Berufsförderungswerk",
      questions: [
        {
          question: "Welcher Ansatz würde primär mit Übungen zur Verbesserung der Rumpfstabilität und Sitzbalance beginnen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich zunächst auf die Verbesserung grundlegender körperlicher Funktionen konzentrieren, die für die Arbeitsfähigkeit wichtig sind."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut fragen: 'Welche beruflichen Tätigkeiten oder Ausbildungsziele streben Sie an, Herr Krause?'",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz beginnt mit der Identifikation bedeutungsvoller beruflicher Ziele und Aktivitäten für den Klienten."
        },
        {
          question: "Welcher Ansatz würde zuerst ein spezifisches Training zur Verbesserung der Feinmotorik der oberen Extremitäten durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender Funktionen wie Feinmotorik konzentrieren, die für viele Arbeitstätigkeiten wichtig sind."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut Herrn Krause bitten, eine angestrebte berufliche Tätigkeit zu simulieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde mit der Beobachtung oder Simulation komplexer, berufsbezogener Situationen beginnen, um Anpassungsbedarf zu identifizieren."
        },
        {
          question: "Welcher Ansatz würde zuerst einen standardisierten Test zur Erfassung der körperlichen Belastbarkeit und Arbeitsfähigkeit durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde typischerweise mit standardisierten Tests beginnen, um spezifische Fähigkeiten und Einschränkungen zu quantifizieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut die Anpassung des Arbeitsplatzes und den Einsatz von Hilfsmitteln priorisieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde sich auf die Anpassung der Arbeitsumgebung und den Einsatz von Hilfsmitteln konzentrieren, um die berufliche Teilhabe zu ermöglichen."
        },
        {
          question: "Welcher Ansatz würde zunächst ein intensives Training zur Verbesserung der Transfertechniken (z.B. Rollstuhl-Arbeitsstuhl) vorsehen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich zunächst auf die Verbesserung grundlegender körperlicher Funktionen konzentrieren, die für die Arbeitsfähigkeit wichtig sind."
        }
      ]
    },
    {
      name: "Lisa Schneider, 27 Jahre, Lernbehinderung, Werkstatt für Menschen mit Behinderung",
      questions: [
        {
          question: "Welcher Ansatz würde primär mit Übungen zur Verbesserung der Konzentration und Aufmerksamkeit beginnen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich zunächst auf die Verbesserung grundlegender kognitiver Funktionen konzentrieren, die für die Arbeitsfähigkeit wichtig sind."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut fragen: 'Welche Arbeitsaufgaben in der Werkstatt machen Ihnen am meisten Spaß, Frau Schneider?'",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz beginnt mit der Identifikation bedeutungsvoller und motivierender Arbeitsaufgaben für den Klienten."
        },
        {
          question: "Welcher Ansatz würde zuerst ein spezifisches Training zur Verbesserung der Handlungsplanung durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender Funktionen wie Handlungsplanung konzentrieren, die für viele Arbeitstätigkeiten wichtig sind."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut Lisa bitten, eine typische Arbeitsaufgabe in der Werkstatt zu demonstrieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde mit der Beobachtung komplexer, arbeitsbezogener Situationen beginnen, um Stärken und Schwächen zu identifizieren."
        },
        {
          question: "Welcher Ansatz würde zuerst einen standardisierten Test zur Erfassung der kognitiven Leistungsfähigkeit und praktischen Fertigkeiten durchführen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde typischerweise mit standardisierten Tests beginnen, um spezifische Fähigkeiten und Einschränkungen zu quantifizieren."
        },
        {
          question: "Bei welchem Ansatz würde der Therapeut die Anpassung von Arbeitsabläufen und die Entwicklung von Kompensationsstrategien priorisieren?",
          answer: "Top down",
          explanation: "Der Top-down-Ansatz würde sich auf die Anpassung der Arbeitsabläufe und die Entwicklung von Strategien konzentrieren, um die Arbeitsfähigkeit zu verbessern."
        },
        {
          question: "Welcher Ansatz würde zunächst ein intensives Training zur Verbesserung der Kommunikationsfähigkeiten im Arbeitskontext vorsehen?",
          answer: "Bottom up",
          explanation: "Der Bottom-up-Ansatz würde sich auf die Verbesserung grundlegender Fähigkeiten wie Kommunikation konzentrieren, bevor er zu komplexeren Arbeitsaufgaben übergeht."
        }
      ]
    }
  ]
};

const Button = ({ onClick, children, disabled, correct }) => (
  <motion.button
    onClick={onClick}
    className={`w-full p-2 mb-2 ${
      disabled
        ? correct
          ? "bg-green-500"
          : "bg-red-500"
        : "bg-blue-500"
    } text-white rounded`}
    disabled={disabled}
    whileHover={{ scale: disabled ? 1 : 1.05 }}
    whileTap={{ scale: disabled ? 1 : 0.95 }}
    transition={{ type: "spring", stiffness: 500, damping: 30 }}
  >
    {children}
  </motion.button>
);

const App = () => {
  const [currentArea, setCurrentArea] = useState(null);
  const [currentCase, setCurrentCase] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  const selectArea = (area) => {
    setCurrentArea(area);
    setCurrentCase(null);
    setCurrentQuestion(0);
    setScore(0);
    setGameComplete(false);
    setAnswered(false);
    setShowExplanation(false);
  };

  const selectCase = (index) => {
    setCurrentCase(index);
    setCurrentQuestion(0);
    setScore(0);
    setGameComplete(false);
    setAnswered(false);
    setShowExplanation(false);
  };

  const handleAnswer = (answer) => {
    if (!answered && currentArea && currentCase !== null) {
      const correct = answer === gameData[currentArea][currentCase].questions[currentQuestion].answer;
      if (correct) setScore(score + 1);
      setAnswered(true);
      setShowExplanation(true);
    }
  };

  const nextQuestion = () => {
    setAnswered(false);
    setShowExplanation(false);
    if (currentQuestion < gameData[currentArea][currentCase].questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameComplete(true);
    }
  };

  if (!currentArea) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Wähle einen Bereich:</h1>
        {Object.keys(gameData).map((area) => (
          <Button key={area} onClick={() => selectArea(area)}>
            {area}
          </Button>
        ))}
      </div>
    );
  }

  if (currentArea && currentCase === null) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Wähle ein Fallbeispiel:</h1>
        {gameData[currentArea].map((caseData, index) => (
          <Button key={index} onClick={() => selectCase(index)}>
            {caseData.name}
          </Button>
        ))}
        <Button onClick={() => setCurrentArea(null)}>
          Zurück zur Bereichsauswahl
        </Button>
      </div>
    );
  }

  if (gameComplete) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Fallbeispiel abgeschlossen!</h1>
        <p className="mb-4">Dein Ergebnis: {score} von {gameData[currentArea][currentCase].questions.length}</p>
        <Button onClick={() => setCurrentCase(null)}>
          Zurück zur Fallbeispielauswahl
        </Button>
        <Button onClick={() => setCurrentArea(null)}>
          Zurück zur Bereichsauswahl
        </Button>
      </div>
    );
  }

  const currentCaseData = gameData[currentArea][currentCase];
  const currentQuestionData = currentCaseData.questions[currentQuestion];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">{currentArea}</h1>
      <h2 className="text-lg mb-4">{currentCaseData.name}</h2>
      <p className="mb-4">Frage {currentQuestion + 1} von {currentCaseData.questions.length}</p>
      <p className="mb-4">{currentQuestionData.question}</p>
      <div className="space-y-2 mb-4">
        <Button
          onClick={() => handleAnswer("Bottom up")}
          disabled={answered}
          correct={answered && currentQuestionData.answer === "Bottom up"}
        >
          Bottom up
        </Button>
        <Button
          onClick={() => handleAnswer("Top down")}
          disabled={answered}
          correct={answered && currentQuestionData.answer === "Top down"}
        >
          Top down
        </Button>
      </div>
      {showExplanation && (
        <Alert className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Erklärung</AlertTitle>
          <AlertDescription>
            {currentQuestionData.explanation}
          </AlertDescription>
        </Alert>
      )}
      {answered && (
        <Button onClick={nextQuestion} correct={true}>
          Nächste Frage
        </Button>
      )}
    </div>
  );
};

export default App;
