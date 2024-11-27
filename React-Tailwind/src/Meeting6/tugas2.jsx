export default function Users() {
  const users = [
    { id: 1, name: "Alex", age: 30 },
  { id: 2, name: "Belva", age: 22 },
  { id: 3, name: "Chris", age: 27 },
  { id: 4, name: "Diana", age: 24 },
  { id: 5, name: "Evelyn", age: 29 },
];

const filteredUmur = users.filter((user) => user.age > 25);

const filteredNama = users.filter((user) => user.name.includes("e"));

    return (
      <>
      <div className="border-2 rounded-lg p-5 m-5 ">
        <h1>Daftar Nama Semua Pengguna</h1>
        {users.map((user) => (<li key={user.id}>{user.name}</li>))}
      </div>

      <div className="border-2 rounded-lg p-5 m-5">
        <h1>Daftar Nama Pengguna dengan Umur Lebih dari 25 Tahun</h1>
        {filteredUmur.map((user) => (<li key={user.id}>{user.name}</li>))}
      </div>

      <div className="border-2 rounded-lg p-5 m-5">
        <h1>Daftar Nama Pengguna Yang memiliki Huruf e </h1>
        {filteredNama.map((user) => (<li key={user.id}>{user.name}</li>))}

      </div>

      </>
    )
}
