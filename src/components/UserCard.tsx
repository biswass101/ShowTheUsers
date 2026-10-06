import { ArrowRight, Mail, MapPin } from 'lucide-react'
import type { User } from '../types/user'

type UserCardProps = {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  const fullName = `${user.name.first} ${user.name.last}`

  return (
    <article className="relative min-h-[280px] border border-(--line) bg-white p-[18px] transition-transform hover:-translate-y-0.5 hover:border-[#a4b9ae]">
      <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-(--muted)"><span className="size-1.5 rounded-full bg-[#76b86a]" /> AVAILABLE</div>
      <img className="mx-auto my-[21px_0_17px] block h-[106px] w-[106px] rounded-full object-cover saturate-75" src={user.picture.large} alt={fullName} />
      <div className="text-center">
        <h3 className="text-lg tracking-[-0.05em]">{fullName}</h3>
        <p className="mt-1 font-mono text-[10px] uppercase text-(--forest)">Team member</p>
        <div className="mt-[17px] grid gap-1 border-t border-[#edf1ee] pt-3 text-left text-[10px] text-(--muted)">
          <span className="flex min-w-0 items-center gap-1.5 truncate"><MapPin size={14} /> {user.location.city}, {user.location.country}</span>
          <span className="flex min-w-0 items-center gap-1.5 truncate"><Mail size={14} /> {user.email}</span>
        </div>
      </div>
      <button className="absolute right-[15px] bottom-[15px] flex size-[29px] items-center justify-center rounded-full border-0 bg-(--lime) transition-transform hover:-rotate-45" type="button" aria-label={`View ${fullName}'s profile`}>
        <ArrowRight size={17} />
      </button>
    </article>
  )
}
