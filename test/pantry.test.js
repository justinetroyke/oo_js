import { expect } from "chai"
import Pantry from "../lib/pantry"

describe("Pantry", () => {
  describe("attributes", () => {
    const pantry = new Pantry()

    it("has stock", () => {
      expect(pantry.stock).to.deep.equal({})
    })
  })

  describe("functions", () => {
    describe("stockCheck", () => {
      it("checks stock for ingredient", () => {
        const pantry = new Pantry()
        expect(pantry.stockCheck("Cheese")).to.deep.eql(0)
      })
    })
  })
})
