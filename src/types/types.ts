

export interface ICard {
  title : string
  price : string
  desc : string
  img : string
}

export interface ITabs {
  filter : string
  cards : ICard[]
}


export interface ISlides {
  img : string
  title : string
}