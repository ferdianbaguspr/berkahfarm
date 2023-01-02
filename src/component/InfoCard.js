import React, { Component } from "react";
import Card from "./Cards";


import Jagung from '../img/jagung.jpg';
import BenihJagung   from '../img/benih-jagung.jpg'
import KedelaiHitam from '../img/kedelai-hitam.jpg';
import kedelai   from '../img/kedelai.jpg'
import Padi from '../img/padi.jpg';
import PeaberryGreenCoffeeBeans   from '../img/peaberry-green-coffee-beans.jpg';
import kopiRobusta from '../img/kopi-robusta.jpg';
import pupukOrganik from '../img/pupuk-organik.png';
import pupukOrganikGranul from '../img/pupuk-organik-granul.png';
import tobaccoSeed from '../img/tobacco-seed.png';
import traktorTangan from '../img/traktor-tangan.png';
import traktorBesar from '../img/traktor-besar.jpg';
import pupukKandang from '../img/pupuk-kandang.jpg';
import pupukNpk from '../img/pupuk-npk.jpg';
import benihKangkung from '../img/benih-kangkung.jpg';
import benihTomat from '../img/benih-tomat.jpg';






class InfoCard extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="baris row" >
                    <div className="col-lg-3" style={{paddingBottom: 15}}>
                        <Card imgsrc={Jagung} title="Jagung" 
                            text="Jagung manis dengan memperhatikan budidaya terbaik di kelasnya"
                        />
                    </div>

                    <div className="col-lg-3" style={{paddingBottom: 15}}>
                        <Card imgsrc={BenihJagung} title="Benih Jagung"
                            text="Benih jagung  dengan kualitas terbaik untuk menanam tanaman yang sehat dan produktif"
                        />
                    </div>

                    <div className="col-lg-3" style={{paddingBottom: 15}}>
                        <Card imgsrc={KedelaiHitam} title="Kedelai Hitam"
                            text="jenis kedelai yang memiliki biji berwarna hitam dan kaya akan nutrisi"
                            />
                    </div>

                    <div className="col-lg-3" style={{paddingBottom: 15}}>
                        <Card imgsrc={kedelai} title="Kedelai"
                            text="Tanaman yang menghasilkan biji-bijian yang dapat diolah menjadi aneka makanan"
                        />
                    </div>

                    <div className="col-lg-3" style={{paddingBottom: 15}}>
                        <Card imgsrc={Padi} title="Padi"
                            text="Padi adalah tanaman pangan utama di seluruh dunia, terutama di Asia."
                        />
                    </div>

                    <div className="col-lg-3" style={{paddingBottom: 15}}>
                        <Card imgsrc={PeaberryGreenCoffeeBeans} title="Peaberry Green Coffee"
                            text="Biji kopi hijau yang memiliki bentuk bulat dan lebih kecil daripada biji kopi biasa."
                        />
                    </div>

                    <div className="col-lg-3" style={{paddingBottom: 15}}>
                        <Card imgsrc={kopiRobusta} title="Biji Robusta"
                            text="Robusta adalah salah satu biji kopi yang populer di dunia. Produk kami memliki kualitas terbaik"
                        />
                    </div>

                    <div className="col-lg-3" style={{paddingBottom: 15}}>
                        <Card imgsrc={tobaccoSeed} title="Benih Tembakau"
                            text="Tanaman yang ditanam untuk dijadikan sebagai bahan baku dari produk tembakau, seperti rokok"
                        />
                    </div>

                    <div className="col-lg-3" style={{paddingBottom: 15}}>
                        <Card imgsrc={benihKangkung} title="Benih Kangkung"
                            text="Benih kangkung merupakan bahan baku penting bagi industri pertanian."
                        />
                    </div>

                    <div className="col-lg-3" style={{paddingBottom: 15}}>
                        <Card imgsrc={benihTomat} title="Benih Tomat"
                            text="Biji yang digunakan untuk menanam tanaman tomat (Solanum lycopersicum)"
                        />
                    </div>

                    <div className="col-lg-3" style={{paddingBottom: 15}}>
                        <Card imgsrc={pupukOrganik} title="Pupuk Organik"
                            text="Pupuk organik adalah jenis pupuk yang terbuat dari bahan-bahan alami"
                        />
                    </div>

                    <div className="col-lg-3" style={{paddingBottom: 15}}>
                        <Card imgsrc={pupukOrganikGranul} title="Pupuk Organik Granul"
                            text="Pupuk organik adalah jenis pupuk yang terbuat dari bahan-bahan alami"
                        />
                    </div>

                    <div className="col-lg-3" style={{paddingBottom: 15}}>
                        <Card imgsrc={pupukKandang} title="Pupuk Kandang"
                            text="Pupuk kandang adalah jenis pupuk yang terbuat dari kotoran hewan, seperti kotoran sapi, kambing"
                        />
                    </div>

                    <div className="col-lg-3" style={{paddingBottom: 15}}>
                        <Card imgsrc={pupukNpk} title="Pupuk NPK"
                            text="Pupuk yang mengandung nutrisi utama untuk tanaman, yaitu nitrogen, fosfor, dan kalium. "
                        />
                    </div>

                    <div className="col-lg-3" style={{paddingBottom: 15}}>
                        <Card imgsrc={traktorTangan} title="Traktor Tangan"
                            text="Alternatif yang lebih kecil dan ringan dibandingkan dengan traktor konvensional"
                        />
                    </div>

                    <div className="col-lg-3" style={{paddingBottom: 15}}>
                        <Card imgsrc={traktorBesar} title="Traktor Besar"
                            text="Alat yang lebih besar dan lebih kuat dibandingkan dengan traktor tangan"
                        />
                    </div>

                </div>
            </div>
        );
    }
}

export default InfoCard;