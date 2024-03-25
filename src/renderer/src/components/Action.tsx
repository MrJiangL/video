import { Plus, UpdateRotation } from '@icon-park/react'
import styles from '../assets/Action.module.scss'

function Action(): JSX.Element {
  return (
    <main className="mt-5">
      <section className="flex justify-center gap-2">
        <div className={styles['button']}>
          <Plus theme="outline" size="42" />
        </div>
        <div className={styles['button']}>
          <UpdateRotation theme="outline" size="42" />
        </div>
      </section>
    </main>
  )
}

export default Action
