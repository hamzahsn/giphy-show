interface IPublicUser {
  username: string
  id: number
  avatar_url: string
  is_verified: boolean
}

export default interface IUser extends IPublicUser {
  about_bio: string
  display_name: string
  user_type: 'partner' | 'artist' | 'user' | 'anonymous'
  is_public: boolean
  primary_site: string
  twitter: string
  facebook: string
  instagram: string
  tumblr_site: string
  twitter_url?: string
  facebook_url?: string
  instagram_url?: string
  tumblr_url?: string
  website_url?: string
}

export interface IProfileUser extends IUser {
  email: string
  gender?: 'male' | 'female' | 'other'
  birthdate?: string
  profile_url: string
  has_default_avatar: boolean
}
