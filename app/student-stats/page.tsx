'use client'

import { useState, useEffect, useCallback } from 'react'
import { User, onAuthStateChanged, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { auth, db } from '@/lib/firebase'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Save } from 'lucide-react'

interface StudentData {
  name: string
  email: string
  phone: string
  parentContact: string
  satTarget: string
  testDate: string
  goals: string
  strengths: string
  weaknesses: string
  math: {
    currentScore: string
    accuracy: string
    errorType: string
    pacingNotes: string
    nextSessionFocus: string
  }
  reading: {
    currentScore: string
    accuracy: string
    errorType: string
    pacingNotes: string
    nextSessionFocus: string
  }
  writing: {
    currentScore: string
    accuracy: string
    errorType: string
    pacingNotes: string
    nextSessionFocus: string
  }
  sessions: Array<{
    date: string
    topicsCovered: string
    strategiesTaught: string
    homeworkAssigned: string
    notes: string
  }>
  errors: string
  practiceTests: string
  growthSummary: string
}

export default function StudentStats() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [studentData, setStudentData] = useState<StudentData>({
    name: '',
    email: '',
    phone: '',
    parentContact: '',
    satTarget: '',
    testDate: '',
    goals: '',
    strengths: '',
    weaknesses: '',
    math: {
      currentScore: '',
      accuracy: '',
      errorType: '',
      pacingNotes: '',
      nextSessionFocus: '',
    },
    reading: {
      currentScore: '',
      accuracy: '',
      errorType: '',
      pacingNotes: '',
      nextSessionFocus: '',
    },
    writing: {
      currentScore: '',
      accuracy: '',
      errorType: '',
      pacingNotes: '',
      nextSessionFocus: '',
    },
    sessions: [],
    errors: '',
    practiceTests: '',
    growthSummary: '',
  })
  const router = useRouter()

  useEffect(() => {
    if (!auth) {
      setLoading(false)
      router.push('/sign-in')
      return
    }
    
    const loadData = async (uid: string, email?: string) => {
      if (!db) {
        console.error('Firestore is not initialized')
        return
      }
      
      try {
        const docRef = doc(db, 'students', uid)
        const docSnap = await getDoc(docRef)
        
        if (docSnap.exists()) {
          const data = docSnap.data() as StudentData
          setStudentData(data)
        } else {
          // Initialize with user email - create fresh initial data
          const initialData: StudentData = {
            name: '',
            email: email || '',
            phone: '',
            parentContact: '',
            satTarget: '',
            testDate: '',
            goals: '',
            strengths: '',
            weaknesses: '',
            math: {
              currentScore: '',
              accuracy: '',
              errorType: '',
              pacingNotes: '',
              nextSessionFocus: '',
            },
            reading: {
              currentScore: '',
              accuracy: '',
              errorType: '',
              pacingNotes: '',
              nextSessionFocus: '',
            },
            writing: {
              currentScore: '',
              accuracy: '',
              errorType: '',
              pacingNotes: '',
              nextSessionFocus: '',
            },
            sessions: [],
            errors: '',
            practiceTests: '',
            growthSummary: '',
          }
          await setDoc(docRef, initialData as any)
          setStudentData(initialData)
        }
      } catch (error) {
        console.error('Error loading student data:', error)
        alert('Failed to load student data. Please refresh the page.')
      }
    }
    
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user || user.email !== 'iamaaritmalhotra@gmail.com') {
        router.push('/sign-in')
        return
      }
      setUser(user)
      setLoading(false)
      await loadData(user.uid, user.email || undefined)
    })

    return () => unsubscribe()
  }, [router])


  const handleSave = async () => {
    if (!user || !db) {
      alert('Firebase is not configured. Please set up your environment variables.')
      return
    }
    
    setSaving(true)
    try {
      const docRef = doc(db, 'students', user.uid)
      await updateDoc(docRef, studentData as any)
      alert('Data saved successfully!')
    } catch (error) {
      console.error('Error saving data:', error)
      alert('Failed to save data. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const handleSignOut = async () => {
    if (!auth) {
      router.push('/sign-in')
      return
    }
    try {
      await signOut(auth)
      router.push('/sign-in')
    } catch (error) {
      console.error('Error signing out:', error)
      alert('Failed to sign out.')
    }
  }

  const addSession = () => {
    setStudentData({
      ...studentData,
      sessions: [
        ...studentData.sessions,
        {
          date: '',
          topicsCovered: '',
          strategiesTaught: '',
          homeworkAssigned: '',
          notes: '',
        },
      ],
    })
  }

  const updateSession = (index: number, field: string, value: string) => {
    const updatedSessions = [...studentData.sessions]
    updatedSessions[index] = { ...updatedSessions[index], [field]: value }
    setStudentData({ ...studentData, sessions: updatedSessions })
  }

  const removeSession = (index: number) => {
    const updatedSessions = studentData.sessions.filter((_, i) => i !== index)
    setStudentData({ ...studentData, sessions: updatedSessions })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="outline"
            onClick={() => router.push('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <div className="flex gap-4">
            <Button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500"
            >
              <Save className="w-4 h-4" />
              {saving ? 'Saving...' : 'Save'}
            </Button>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black mb-8 text-black">
          Student Profile
        </h1>

        {/* Student Information */}
        <div className="bg-white border-3 border-blue-500 rounded-2xl p-6 md:p-8 mb-6 shadow-xl">
          <h2 className="text-2xl font-black mb-6 text-black border-b-2 border-blue-500 pb-2">
            Student Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-black">Name:</label>
              <input
                type="text"
                value={studentData.name}
                onChange={(e) => setStudentData({ ...studentData, name: e.target.value })}
                className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-black">Email / Phone:</label>
              <input
                type="text"
                value={studentData.email}
                onChange={(e) => setStudentData({ ...studentData, email: e.target.value })}
                className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                placeholder="Email"
              />
              <input
                type="text"
                value={studentData.phone}
                onChange={(e) => setStudentData({ ...studentData, phone: e.target.value })}
                className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Phone"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-black">Parent Contact:</label>
              <input
                type="text"
                value={studentData.parentContact}
                onChange={(e) => setStudentData({ ...studentData, parentContact: e.target.value })}
                className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-black">SAT Target:</label>
              <input
                type="text"
                value={studentData.satTarget}
                onChange={(e) => setStudentData({ ...studentData, satTarget: e.target.value })}
                className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-black">Test Date:</label>
              <input
                type="date"
                value={studentData.testDate}
                onChange={(e) => setStudentData({ ...studentData, testDate: e.target.value })}
                className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-black">Goals:</label>
              <textarea
                value={studentData.goals}
                onChange={(e) => setStudentData({ ...studentData, goals: e.target.value })}
                className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-black">Strengths:</label>
              <textarea
                value={studentData.strengths}
                onChange={(e) => setStudentData({ ...studentData, strengths: e.target.value })}
                className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-black">Weaknesses:</label>
              <textarea
                value={studentData.weaknesses}
                onChange={(e) => setStudentData({ ...studentData, weaknesses: e.target.value })}
                className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
              />
            </div>
          </div>
        </div>

        {/* Diagnostic & Score Tracking */}
        <div className="bg-white border-3 border-red-500 rounded-2xl p-6 md:p-8 mb-6 shadow-xl">
          <h2 className="text-2xl font-black mb-6 text-black border-b-2 border-red-500 pb-2">
            Diagnostic & Score Tracking
          </h2>
          
          {/* Math Section */}
          <div className="mb-6">
            <h3 className="text-xl font-black mb-4 text-blue-600">Math</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">Current Score:</label>
                <input
                  type="text"
                  value={studentData.math.currentScore}
                  onChange={(e) => setStudentData({
                    ...studentData,
                    math: { ...studentData.math, currentScore: e.target.value }
                  })}
                  className="w-full px-4 py-2 border-2 border-black rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Accuracy:</label>
                <input
                  type="text"
                  value={studentData.math.accuracy}
                  onChange={(e) => setStudentData({
                    ...studentData,
                    math: { ...studentData.math, accuracy: e.target.value }
                  })}
                  className="w-full px-4 py-2 border-2 border-black rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Error Type (C/K/T):</label>
                <input
                  type="text"
                  value={studentData.math.errorType}
                  onChange={(e) => setStudentData({
                    ...studentData,
                    math: { ...studentData.math, errorType: e.target.value }
                  })}
                  className="w-full px-4 py-2 border-2 border-black rounded-lg"
                  placeholder="C = Careless, K = Knowledge, T = Timing"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Pacing Notes:</label>
                <input
                  type="text"
                  value={studentData.math.pacingNotes}
                  onChange={(e) => setStudentData({
                    ...studentData,
                    math: { ...studentData.math, pacingNotes: e.target.value }
                  })}
                  className="w-full px-4 py-2 border-2 border-black rounded-lg"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-2">Next Session Focus:</label>
                <textarea
                  value={studentData.math.nextSessionFocus}
                  onChange={(e) => setStudentData({
                    ...studentData,
                    math: { ...studentData.math, nextSessionFocus: e.target.value }
                  })}
                  className="w-full px-4 py-2 border-2 border-black rounded-lg min-h-[80px]"
                />
              </div>
            </div>
          </div>

          {/* Reading Section */}
          <div className="mb-6">
            <h3 className="text-xl font-black mb-4 text-red-600">Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">Current Score:</label>
                <input
                  type="text"
                  value={studentData.reading.currentScore}
                  onChange={(e) => setStudentData({
                    ...studentData,
                    reading: { ...studentData.reading, currentScore: e.target.value }
                  })}
                  className="w-full px-4 py-2 border-2 border-black rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Accuracy:</label>
                <input
                  type="text"
                  value={studentData.reading.accuracy}
                  onChange={(e) => setStudentData({
                    ...studentData,
                    reading: { ...studentData.reading, accuracy: e.target.value }
                  })}
                  className="w-full px-4 py-2 border-2 border-black rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Error Type (C/K/T):</label>
                <input
                  type="text"
                  value={studentData.reading.errorType}
                  onChange={(e) => setStudentData({
                    ...studentData,
                    reading: { ...studentData.reading, errorType: e.target.value }
                  })}
                  className="w-full px-4 py-2 border-2 border-black rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Pacing Notes:</label>
                <input
                  type="text"
                  value={studentData.reading.pacingNotes}
                  onChange={(e) => setStudentData({
                    ...studentData,
                    reading: { ...studentData.reading, pacingNotes: e.target.value }
                  })}
                  className="w-full px-4 py-2 border-2 border-black rounded-lg"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-2">Next Session Focus:</label>
                <textarea
                  value={studentData.reading.nextSessionFocus}
                  onChange={(e) => setStudentData({
                    ...studentData,
                    reading: { ...studentData.reading, nextSessionFocus: e.target.value }
                  })}
                  className="w-full px-4 py-2 border-2 border-black rounded-lg min-h-[80px]"
                />
              </div>
            </div>
          </div>

          {/* Writing Section */}
          <div>
            <h3 className="text-xl font-black mb-4 text-blue-600">Writing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">Current Score:</label>
                <input
                  type="text"
                  value={studentData.writing.currentScore}
                  onChange={(e) => setStudentData({
                    ...studentData,
                    writing: { ...studentData.writing, currentScore: e.target.value }
                  })}
                  className="w-full px-4 py-2 border-2 border-black rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Accuracy:</label>
                <input
                  type="text"
                  value={studentData.writing.accuracy}
                  onChange={(e) => setStudentData({
                    ...studentData,
                    writing: { ...studentData.writing, accuracy: e.target.value }
                  })}
                  className="w-full px-4 py-2 border-2 border-black rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Error Type (C/K/T):</label>
                <input
                  type="text"
                  value={studentData.writing.errorType}
                  onChange={(e) => setStudentData({
                    ...studentData,
                    writing: { ...studentData.writing, errorType: e.target.value }
                  })}
                  className="w-full px-4 py-2 border-2 border-black rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Pacing Notes:</label>
                <input
                  type="text"
                  value={studentData.writing.pacingNotes}
                  onChange={(e) => setStudentData({
                    ...studentData,
                    writing: { ...studentData.writing, pacingNotes: e.target.value }
                  })}
                  className="w-full px-4 py-2 border-2 border-black rounded-lg"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-2">Next Session Focus:</label>
                <textarea
                  value={studentData.writing.nextSessionFocus}
                  onChange={(e) => setStudentData({
                    ...studentData,
                    writing: { ...studentData.writing, nextSessionFocus: e.target.value }
                  })}
                  className="w-full px-4 py-2 border-2 border-black rounded-lg min-h-[80px]"
                />
              </div>
            </div>
          </div>

          {/* Error Type Key */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border-2 border-black">
            <h4 className="font-bold mb-2">Error Type Key:</h4>
            <ul className="text-sm space-y-1">
              <li><strong>C</strong> = Careless – Misreading, small mistakes, miscalculations</li>
              <li><strong>K</strong> = Knowledge / Concept gap – Doesn&apos;t know underlying concept</li>
              <li><strong>T</strong> = Timing / Pacing – Runs out of time or too slow</li>
            </ul>
          </div>
        </div>

        {/* Session Log */}
        <div className="bg-white border-3 border-blue-500 rounded-2xl p-6 md:p-8 mb-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-black border-b-2 border-blue-500 pb-2">
              Session Log
            </h2>
            <Button onClick={addSession} className="bg-blue-600 hover:bg-blue-700">
              Add Session
            </Button>
          </div>
          
          {studentData.sessions.map((session, index) => (
            <div key={index} className="mb-6 p-4 border-2 border-black rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Session {index + 1}</h3>
                <Button
                  variant="outline"
                  onClick={() => removeSession(index)}
                  className="text-red-600 border-red-600 hover:bg-red-50"
                >
                  Remove
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Date:</label>
                  <input
                    type="date"
                    value={session.date}
                    onChange={(e) => updateSession(index, 'date', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-black rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Topics Covered:</label>
                  <input
                    type="text"
                    value={session.topicsCovered}
                    onChange={(e) => updateSession(index, 'topicsCovered', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-black rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Strategies Taught:</label>
                  <input
                    type="text"
                    value={session.strategiesTaught}
                    onChange={(e) => updateSession(index, 'strategiesTaught', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-black rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Homework Assigned:</label>
                  <input
                    type="text"
                    value={session.homeworkAssigned}
                    onChange={(e) => updateSession(index, 'homeworkAssigned', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-black rounded-lg"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-2">Notes / Progress:</label>
                  <textarea
                    value={session.notes}
                    onChange={(e) => updateSession(index, 'notes', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-black rounded-lg min-h-[100px]"
                  />
                </div>
              </div>
            </div>
          ))}
          
          {studentData.sessions.length === 0 && (
            <p className="text-foreground/70 text-center py-8">No sessions logged yet. Click &quot;Add Session&quot; to get started.</p>
          )}
        </div>

        {/* Errors & Pattern Recognition */}
        <div className="bg-white border-3 border-red-500 rounded-2xl p-6 md:p-8 mb-6 shadow-xl">
          <h2 className="text-2xl font-black mb-6 text-black border-b-2 border-red-500 pb-2">
            Errors & Pattern Recognition
          </h2>
          <label className="block text-sm font-bold mb-2">List recurring mistakes, traps, shortcuts, patterns:</label>
          <textarea
            value={studentData.errors}
            onChange={(e) => setStudentData({ ...studentData, errors: e.target.value })}
            className="w-full px-4 py-2 border-2 border-black rounded-lg min-h-[200px]"
            placeholder="Enter recurring errors and patterns..."
          />
        </div>

        {/* Practice Test Review */}
        <div className="bg-white border-3 border-blue-500 rounded-2xl p-6 md:p-8 mb-6 shadow-xl">
          <h2 className="text-2xl font-black mb-6 text-black border-b-2 border-blue-500 pb-2">
            Practice Test Review
          </h2>
          <label className="block text-sm font-bold mb-2">Full review of each practice test, error analysis, timing issues, target areas:</label>
          <textarea
            value={studentData.practiceTests}
            onChange={(e) => setStudentData({ ...studentData, practiceTests: e.target.value })}
            className="w-full px-4 py-2 border-2 border-black rounded-lg min-h-[200px]"
            placeholder="Enter practice test reviews..."
          />
        </div>

        {/* Growth Summary */}
        <div className="bg-white border-3 border-red-500 rounded-2xl p-6 md:p-8 mb-6 shadow-xl">
          <h2 className="text-2xl font-black mb-6 text-black border-b-2 border-red-500 pb-2">
            Growth Summary
          </h2>
          <label className="block text-sm font-bold mb-2">Overall progress, key improvements, areas still needing focus:</label>
          <textarea
            value={studentData.growthSummary}
            onChange={(e) => setStudentData({ ...studentData, growthSummary: e.target.value })}
            className="w-full px-4 py-2 border-2 border-black rounded-lg min-h-[200px]"
            placeholder="Enter growth summary..."
          />
        </div>

        {/* Save Button at Bottom */}
        <div className="flex justify-center mb-8">
          <Button
            onClick={handleSave}
            disabled={saving}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold px-12 py-6 text-lg"
          >
            <Save className="w-5 h-5 mr-2" />
            {saving ? 'Saving...' : 'Save All Changes'}
          </Button>
        </div>
      </div>
    </div>
  )
}

