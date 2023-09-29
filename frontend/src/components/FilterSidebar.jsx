import React, { useState } from 'react'
import { Form, Col } from 'react-bootstrap'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

const FilterSidebar = ({ applyFilters }) => {
  const [filterTypes, setFilterTypes] = useState([])
  const [capacities, setCapacities] = useState([])
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 })

  const handleApplyFilters = () => {
    const filters = {
      filterTypes,
      capacities,
      priceRange
    }
    applyFilters(filters)
  }

  return (
    <div className="sidebar">
      <Form>
        <Form.Group controlId="filterTypes" className="mb-3">
          <Form.Label>TYPE</Form.Label>
          <Col>
            <Form.Check
              type="checkbox"
              label="Sport"
              onChange={(e) =>
                e.target.checked
                  ? setFilterTypes([...filterTypes, 'Sport'])
                  : setFilterTypes(
                      filterTypes.filter((type) => type !== 'Sport')
                    )
              }
            />
            <Form.Check
              type="checkbox"
              label="SUV"
              onChange={(e) =>
                e.target.checked
                  ? setFilterTypes([...filterTypes, 'SUV'])
                  : setFilterTypes(filterTypes.filter((type) => type !== 'SUV'))
              }
            />
            <Form.Check
              type="checkbox"
              label="MPV"
              onChange={(e) =>
                e.target.checked
                  ? setFilterTypes([...filterTypes, 'MPV'])
                  : setFilterTypes(filterTypes.filter((type) => type !== 'MPV'))
              }
            />
            <Form.Check
              type="checkbox"
              label="Sedan"
              onChange={(e) =>
                e.target.checked
                  ? setFilterTypes([...filterTypes, 'Sedan'])
                  : setFilterTypes(
                      filterTypes.filter((type) => type !== 'Sedan')
                    )
              }
            />
            <Form.Check
              type="checkbox"
              label="Coupe"
              onChange={(e) =>
                e.target.checked
                  ? setFilterTypes([...filterTypes, 'Coupe'])
                  : setFilterTypes(
                      filterTypes.filter((type) => type !== 'Coupe')
                    )
              }
            />
            <Form.Check
              type="checkbox"
              label="Hatchback"
              onChange={(e) =>
                e.target.checked
                  ? setFilterTypes([...filterTypes, 'Hatchback'])
                  : setFilterTypes(
                      filterTypes.filter((type) => type !== 'Hatchback')
                    )
              }
            />
          </Col>
        </Form.Group>

        <Form.Group controlId="capacities" className="mb-3">
          <Form.Label>CAPACITY</Form.Label>
          <Col>
            <Form.Check
              type="checkbox"
              label="2 Person"
              onChange={(e) =>
                e.target.checked
                  ? setCapacities([...capacities, '2 Person'])
                  : setCapacities(
                      capacities.filter((capacity) => capacity !== '2 Person')
                    )
              }
            />
            <Form.Check
              type="checkbox"
              label="4 Person"
              onChange={(e) =>
                e.target.checked
                  ? setCapacities([...capacities, '4 Person'])
                  : setCapacities(
                      capacities.filter((capacity) => capacity !== '4 Person')
                    )
              }
            />

            <Form.Check
              type="checkbox"
              label="6 Person"
              onChange={(e) =>
                e.target.checked
                  ? setCapacities([...capacities, '6 Person'])
                  : setCapacities(
                      capacities.filter((capacity) => capacity !== '6 Person')
                    )
              }
            />

            <Form.Check
              type="checkbox"
              label="8 Person"
              onChange={(e) =>
                e.target.checked
                  ? setCapacities([...capacities, '8 Person'])
                  : setCapacities(
                      capacities.filter((capacity) => capacity !== '8 Person')
                    )
              }
            />
          </Col>
        </Form.Group>

        <Form.Group controlId="priceRange" className="mb-4">
          <Form.Label>Price Range</Form.Label>
          <InputRange
            maxValue={100}
            minValue={0}
            value={priceRange}
            onChange={(value) => setPriceRange(value)}
          />
        </Form.Group>

        <button className="btn btn-primary" onClick={handleApplyFilters}>
          Apply Filters
        </button>
      </Form>
    </div>
  )
}

export default FilterSidebar
