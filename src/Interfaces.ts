import {ColorValue} from "react-native";


export interface IData {
  active: boolean
  created: {
    _nanoseconds: number
    _seconds: number
  }
  data: {
    duration: number
    id: string
    level?: string
    name: {
      en: string
      ru?: string
    }
    numberOfExercises: number
  } | null
  doodle?: string
  extraKudos: number
  hasDoodle: boolean
  id: string
  isSticky: boolean
  kudos: IKudos[]
  kudosFull?: IKudos[]
  kudosPhotos: string[]
  kudos_count?: number
  pushSentFrom?: string[]
  totalKudos: number
  type: string
  user: {
    daysInRow: number
    displayName: string
    photoURL: string
    place: string | null
    uid: string
    workoutsTotal: number
    location?: string
  }
  workout: {
    _converter: {}
    _firestore: {
      projectId: string
    }
    _path: {
      segments: string[]
    }
  } | null
}

interface IKudos {
  hashtag: string
  time: {
    _nanoseconds: number
    _seconds: number
  }
  user: {
    id: string
    name: string
    photo: string
  }
}

export type ICardProps = {
  data: IData
  open: Function
  type: CardType
}
export type ICardListProps = {
  data: IData[] | null
  open: Function
}

export type CardType = 'small' | 'big'

export type LoaderProps = {
  color: ColorValue
  size: number | "small" | "large" | undefined
}
