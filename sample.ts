import { User } from "./types/api";

function main(): void {
  const user: User = {
    id: 1,
    name: 'hoge'
  }

  console.log({ user })
}

main()
