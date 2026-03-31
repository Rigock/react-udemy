interface Props {
  title: string;
  description?: string;
}

export const CustomHeader = ({ title, description }: Props) => {
  return (
    <>
      <div className="content-center">
        <h1 data-testid="title-custom-header"> {title} </h1>
        {description && <p data-testid="description-custom-header"> {description} </p>}
      </div>
    </>
  )
}
