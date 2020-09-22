import { Character } from '../models/character.model'

export class CharacterService {
  characters: Character[] = []
  getCharacters() {
    return this.characters
  }
  setCharacters(characters: Character[]) {
    this.characters = characters
  }
  addCharacter(character: Character) {
    this.characters.push(character)
  }
}
