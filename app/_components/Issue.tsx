import Status from './Status'
import { useMutation, useQuery } from 'urql'
import { DeleteIssueMutation } from '@/gql/deleteIssueMutation'


const Issue = ({ issue }) => {
  const displayId = issue.id.split('-').pop().slice(-3)

  const [deleteResult, deleteIssue] = useMutation(DeleteIssueMutation)
  const handleDelete = async () => {
    console.log('Delete issue, ID:', issue.id);

    await deleteIssue({ input: { id: issue.id } })

    
  }

  return (
    <div className="px-4 h-[40px] border-b flex items-center hover:bg-slate-50 gap-4">
      <span className="text-sm text-slate-300 w-[80px]">
        {`PAR-${displayId}`.toUpperCase()}
      </span>
      <Status status={issue.status} issueId={issue.id} />
      <span>{issue.name}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Issue
