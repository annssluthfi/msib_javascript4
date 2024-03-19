let frm = document.getElementById("pegawai");

let jabatan = ["Manager", "Asisten Manager", "Staff"];
let pilihJabatan = `<option value="">Pilih Jabatan----</option>`;

for (let j in jabatan) {
	pilihJabatan += `<option value="${jabatan[j]}">${jabatan[j]}</option>`;
}

let statusPegawai = ["Menikah", "Belum Menikah"];
let pilihStatus = `<option value="">Pilih Status----</option>`;

for (let s in statusPegawai) {
	pilihStatus += `<option value="${statusPegawai[s]}">${statusPegawai[s]}</option>`;
}

frm.jabatan.innerHTML = pilihJabatan;
frm.status.innerHTML = pilihStatus;

let gajiP = 0;
let ternary = 0;

function gaji() {
	let nama = frm.nama.value;
	let jabatan = frm.jabatan.value;
	let status = frm.status.value;

	if (jabatan == "Manager") gajiP = 15000000;
	else if (jabatan == "Asisten Manager") gajiP = 10000000;
	else gajiP = 5000000;

	let tunjangan = 0.15 * gajiP;
	let bpjs = 0.1 * gajiP;

	if (status == "Menikah") ternary = 0.2 * gajiP;
	else ternary = 0;

	let total = gajiP + tunjangan + bpjs + ternary;

	document.getElementById("tabel").innerHTML =`
        <table align="center" border="1" cellpadding="10">
        <thead>
        <tr>
        <th align="center">Nama Pegawai</th>
        <th align="center">Jabatan</th>
        <th align="center">Status</th>
        <th align="center">Gaji Pokok</th>
        <th align="center">Tunjangan</th>
        <th align="center">BPJS</th>
        <th align="center">Tunjangan Keluarga</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>${nama}</td>
        <td>${jabatan}</td>
        <td>${status}</td>
        <td>${gajiP}</td>
        <td>${tunjangan}</td>
        <td>${bpjs}</td>
        <td>${ternary}</td>
        </tr>
        </tbody>
        <tr>
        <td colspan="6" align="center"><b>Total</b></td>
        <td>${total}</td>
        </tr>
        <tfoot>
        </tfoot>
        </table>
        `;

        //untuk mengosongkan form setelah submit
        frm.reset();
}

