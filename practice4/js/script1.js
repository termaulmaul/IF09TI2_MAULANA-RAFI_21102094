     document.getElementById("hitung").onclick = function() {
        hitung_luas_segitiga();
    };

    function hitung_luas_segitiga(){
        var a = document.getElementById("alas").value;
        var t = document.getElementById("tinggi").value;
        var hasil = 0.5 * a * t;
        document.getElementById('hasil').innerHTML = hasil;
    }

    document.getElementById("konversiButton").onclick = function() {
        konversi();
    };

    function konversi(){
        var nilai_angka = document.getElementsByClassName("nilai_angka")[0];
        var grade;
        if(nilai_angka.value >= 90) grade = "A";
        else if(nilai_angka.value >= 80) grade = "B+";
        else if(nilai_angka.value >= 70) grade = "B";
        else if(nilai_angka.value >= 60) grade = "C+";
        else if(nilai_angka.value >= 50) grade = "C";
        else if(nilai_angka.value >= 40) grade = "D";
        else if(nilai_angka.value >= 30) grade = "E";
        else grade = "F";
        document.getElementById('hasil2').innerHTML = grade;
    }

    document.getElementById("jumlah").addEventListener("keyup", function() {
        hitung_total();
    });

    document.getElementById("harga").addEventListener("keyup", function() {
        hitung_total();
    });

    function hitung_total(){
        var jumlah = document.getElementById("jumlah").value;
        var harga = document.getElementById("harga").value;
        if(jumlah == "" || harga == ""){
            document.getElementById('total').value = "0";
        }
        else{
            document.getElementById('total').value = jumlah * harga;
        }
    }

    document.getElementById("cetakButton").onclick = function() {
        cetak();
    };

    function cetak(){
        window.print();
    }