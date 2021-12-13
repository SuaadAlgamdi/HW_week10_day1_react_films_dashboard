import { Button } from "react-bootstrap"
import { useContext } from "react"
import { Table } from "react-bootstrap"
import GenresCell from "../components/GenresCall"
import FilmsContext from "../utils/FilmsContext"


function Genres() {
  const { genres } = useContext(FilmsContext)
  return (
    <Table bordered hover style={{ tableLayout: "fixed" }}>
      <thead>
        <tr>
          <th style={{ width: "9%" }}>#</th>
          <th style={{ width: "18%" }}>Name</th>
          <th style={{ width: "36%" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {genres.map(genre => (
          <GenresCell key={genre._id} genre={genre} />
        ))}
      </tbody>
    </Table>
  )
}

export default Genres
