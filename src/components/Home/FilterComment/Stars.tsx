import {FC, useState} from 'react'

interface StarsProps {
  rating: number
}

export const Stars: FC<StarsProps> = ({rating}) => {
  const [filledStars, setFilledStars] = useState(rating);
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="flex">
      {stars.map((star) => (
        <span
          key={star}
          className={`text-yellow-400 cursor-pointer text-2xl ${star <= filledStars ? 'fill-current' : 'opacity-50'}`}
          onClick={() => setFilledStars(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}
