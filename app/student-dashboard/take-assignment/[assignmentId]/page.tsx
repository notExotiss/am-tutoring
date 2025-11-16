'use client'

// Placeholder for assignment taking - can reuse test logic later
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function TakeAssignmentPage() {
  const params = useParams()
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-4">Assignment</h1>
          <p className="text-lg mb-6">Assignment taking functionality will be implemented here.</p>
          <p className="text-gray-600 mb-6">Assignment ID: {params.assignmentId}</p>
          <Button variant="outline" onClick={() => router.push('/student-dashboard')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  )
}

