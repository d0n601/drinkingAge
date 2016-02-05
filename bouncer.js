/* 
 * Plugin: bouncer.js
 * Description: A simple script to determine if a visitor is of legal drinking age.
 * Options will be passable soon for customization.  
 * Author: Ryan Kozak
 * Author's website: https://ryankozak.com
 * 
 */


var config;


function drinkingAge(settings) {
    config = settings;
    insertHTML();
    checkCookie();
}

function getCookie(cname) 
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCookie()
{
    var age_verification = getCookie("age_verification");

    if (age_verification == "" || age_verification == null) {
       	$('#age_overlay').css('display','inherit');
        $('#age_controls').css('display','inherit');
        $('html,body').css('overflow','hidden'); 
    }
} 

function setCookie(cname, cvalue, exdays)
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function submitAge()
{
    var month,day,year, today, birthday, age, dinkAge;

    drinkAge = $("#country").val();

    month   = $("#a_month").val();
    day     = $("#a_day").val();
    year    = $("#a_year").val();

    today    = new Date(); 
    birthday = new Date(year, month, day);
    age      = new Date(today - birthday);

    age = age/1000/60/60/24/365;

    if(age >= drinkAge) {
        setCookie("age_verification", age, 1);
        window.location.reload();
    }
    else {
        denyEntry();
    }

}

function denyEntry() {
    var err_msg;

    err_msg = `
                <div id="deny_entry" class="alert alert-danger">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>`;
    err_msg+=           config.deny_message;
    err_msg+= `</div>`;
    $('body').prepend(err_msg).delay(2000);
    window.location = config.redirect;
}


function insertHTML() {

    var html;
            
    html = `

    <div id="age_controls">
        <form class="form-inline" action="javascript:submitAge();">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-xs-12 spacers">
                    <center> `;

    html+="         <img src='"+config.image+"' class='img-responsive'>";

    html+=`  
                    </center>
                </div>
                <div class="col-lg-12 col-md-12 col-xs-12 text-center spacers">
                    <strong>`;

    html+= config.message;

    html+= `       </strong>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-xs-12 text-center spacers">
                    <label>Date of Birth:</label>
                    <div class="form-group">
                        <select id="a_month">
                            <option value="-1">Month</option>
                            <option value="0">January</option>
                            <option value="1">February</option>
                            <option value="2">March</option>
                            <option value="3">April</option>
                            <option value="4">May</option>
                            <option value="5">June</option>
                            <option value="6">July</option>
                            <option value="7">August</option>
                            <option value="8">September</option>
                            <option value="9">October</option>
                            <option value="10">November</option>
                            <option value="11">December</option>
                        </select>
                        <select id="a_day">
                            <option value="-1">Day</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                        <select id="a_year">
                            <option value="-1">Year</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1965">1965</option>
                            <option value="1964">1964</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>
                            <option value="1959">1959</option>
                            <option value="1958">1958</option>
                            <option value="1957">1957</option>
                            <option value="1956">1956</option>
                            <option value="1955">1955</option>
                            <option value="1954">1954</option>
                            <option value="1953">1953</option>
                            <option value="1952">1952</option>
                            <option value="1951">1951</option>
                            <option value="1950">1950</option>
                            <option value="1949">1949</option>
                            <option value="1948">1948</option>
                            <option value="1947">1947</option>
                            <option value="1946">1946</option>
                            <option value="1945">1945</option>
                            <option value="1944">1944</option>
                            <option value="1943">1943</option>
                            <option value="1942">1942</option>
                            <option value="1941">1941</option>
                            <option value="1940">1940</option>
                            <option value="1939">1939</option>
                            <option value="1938">1938</option>
                            <option value="1937">1937</option>
                            <option value="1936">1936</option>
                            <option value="1935">1935</option>
                            <option value="1934">1934</option>
                            <option value="1933">1933</option>
                            <option value="1932">1932</option>
                            <option value="1931">1931</option>
                            <option value="1930">1930</option>
                            <option value="1929">1929</option>
                            <option value="1928">1928</option>
                            <option value="1927">1927</option>
                            <option value="1926">1926</option>
                            <option value="1925">1925</option>
                            <option value="1924">1924</option>
                            <option value="1923">1923</option>
                            <option value="1922">1922</option>
                            <option value="1921">1921</option>
                            <option value="1920">1920</option>
                            <option value="1919">1919</option>
                            <option value="1918">1918</option>
                            <option value="1917">1917</option>
                            <option value="1916">1916</option>
                            <option value="1915">1915</option>
                            <option value="1914">1914</option>
                            <option value="1913">1913</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-xs-12 text-center spacers">
                    <label>Location:</label>
                    <div class="form-group">
                        <select id="country">
                        <option value="1000">Afghanistan</option>
                        <option value="18">Albania</option>
                        <option value="18">Algeria</option>
                        <option value="18">Andorra</option>
                        <option value="18">Angola</option>
                        <option value="10">Antigua and Barbuda</option>
                        <option value="18">Argentina</option>
                        <option value="18">Armenia</option>
                        <option value="16">Aruba</option>
                        <option value="18">Australia</option>
                        <option value="16">Austria</option>
                        <option value="18">Azerbaijan</option>
                        <option value="18">Bahamas</option>
                        <option value="0">Bahrain</option>
                        <option value="0">Bangladesh</option>
                        <option value="18">Barbados</option>
                        <option value="18">Belarus</option>
                        <option value="18">Belgium</option>
                        <option value="18">Belize</option>
                        <option value="0">Benin</option>
                        <option value="18">Bhutan</option>
                        <option value="0">Bolivia</option>
                        <option value="18">Bosnia And Herzegovina</option>
                        <option value="18">Botswana</option>
                        <option value="18">Brazil</option>
                        <option value="1000">Brunei</option>
                        <option value="18">Bulgaria</option>
                        <option value="0">Burkina Faso</option>
                        <option value="0">Burundi</option>
                        <option value="0">Cambodia</option>
                        <option value="0">Cameroon</option>
                        <option value="18">Canada</option>
                        <option value="18">Cape Verde</option>
                        <option value="21">Central Africa</option>
                        <option value="18">Chad</option>
                        <option value="18">Chile</option>
                        <option value="0">China</option>
                        <option value="18">Colombia</option>
                        <option value="18">Comoros</option>
                        <option value="18">Congo, Democratic Republic of the</option>
                        <option value="18">Congo, Republic of the</option>
                        <option value="18">Costa Rica</option>
                        <option value="21">Cote Divoire</option>
                        <option value="18">Croatia</option>
                        <option value="18">Cuba</option>
                        <option value="17">Cyprus</option>
                        <option value="18">Czech Republic</option>
                        <option value="18">Denmark</option>
                        <option value="0">Djibouti</option>
                        <option value="16">Dominica</option>
                        <option value="18">Dominican Republic</option>
                        <option value="18">Ecuador</option>
                        <option value="21">Egypt</option>
                        <option value="18">El Salvador</option>
                        <option value="21">Equatorial Guinea</option>
                        <option value="18">Eritrea</option>
                        <option value="18">Estonia</option>
                        <option value="18">Ethiopia</option>
                        <option value="18">Fiji</option>
                        <option value="18">Finland</option>
                        <option value="18">France</option>
                        <option value="18">Gambia</option>
                        <option value="18">Gabon</option>
                        <option value="18">Georgia</option>
                        <option value="18">Germany</option>
                        <option value="18">Ghana</option>
                        <option value="18">Greece</option>
                        <option value="18">Greenland</option>
                        <option value="16">Grenada</option>
                        <option value="18">Guatemala</option>
                        <option value="18">Guinea</option>
                        <option value="0">Guinea-Bissau</option>
                        <option value="18">Guyana</option>
                        <option value="16">Haiti</option>
                        <option value="18">Honduras</option>
                        <option value="18">Hungary</option>
                        <option value="20">Iceland</option>
                        <option value="18">India</option>
                        <option value="0">Indonesia</option>
                        <option value="1000">Iran</option>
                        <option value="21">Iraq</option>
                        <option value="18">Ireland</option>
                        <option value="18">Israel</option>
                        <option value="18">Italy</option>
                        <option value="18">Jamaica</option>
                        <option value="20">Japan</option>
                        <option value="18">Jordan</option>
                        <option value="18">Kazakhstan</option>
                        <option value="18">Kenya</option>
                        <option value="21">Kiribati</option>
                        <option value="19">Korea, Republic of</option>
                        <option value="1000">Kuwait</option>
                        <option value="18">Kyrgyzstan</option>
                        <option value="18">Lao Peoples Democratic Republic</option>
                        <option value="18">Latvia</option>
                        <option value="18">Lebanon</option>
                        <option value="18">Lesotho</option>
                        <option value="18">Liberia</option>
                        <option value="1000">Libya</option>
                        <option value="18">Liechtenstein</option>
                        <option value="18">Lithuania</option>
                        <option value="16">Luxembourg</option>
                        <option value="18">Macedonia</option>
                        <option value="18">Madagascar</option>
                        <option value="18">Malawi</option>
                        <option value="18">Malaysia</option>
                        <option value="1000">Maldives</option>
                        <option value="0">Mali</option>
                        <option value="17">Malta</option>
                        <option value="0">Marshall Islands</option>
                        <option value="1000">Mauritania</option>
                        <option value="18">Mauritius</option>
                        <option value="18">Mexico</option>
                        <option value="21">Micronesia</option>
                        <option value="18">Moldova</option>
                        <option value="18">Monaco</option>
                        <option value="21">Mongolia</option>
                        <option value="18">Montenegro</option>
                        <option value="16">Morocco</option>
                        <option value="18">Mozambique</option>
                        <option value="18">Myanmar</option>
                        <option value="18">Namibia</option>
                        <option value="21">Nauru</option>
                        <option value="18">Nepal</option>
                        <option value="18">Netherlands</option>
                        <option value="18">New Zealand</option>
                        <option value="18">Nicaragua</option>
                        <option value="18">Niger</option>
                        <option value="18">Nigeria</option>
                        <option value="1000">North Korea</option>
                        <option value="18">Norway</option>
                        <option value="21">Oman</option>
                        <option value="1000">Pakistan</option>
                        <option value="21">Palau</option>
                        <option value="18">Panama</option>
                        <option value="18">Papua New Guinea</option>
                        <option value="20">Paraguay</option>
                        <option value="18">Peru</option>
                        <option value="18">Philippines</option>
                        <option value="18">Poland</option>
                        <option value="16">Portugal</option>
                        <option value="18">Puerto Rico</option>
                        <option value="1000">Qatar</option>
                        <option value="18">Romania</option>
                        <option value="18">Russian Federation</option>
                        <option value="18">Rwanda</option>
                        <option value="18">Saint Kitts And Nevis</option>
                        <option value="16">Saint Lucia</option>
                        <option value="16">Saint Vincent And The Grenadines</option>
                        <option value="21">Samoa</option>
                        <option value="16">San Marino</option>
                        <option value="1000">Sao Tome and Principe</option>
                        <option value="1000">Saudi Arabia</option>
                        <option value="18">Senegal</option>
                        <option value="18">Serbia, Republic of</option>
                        <option value="18">Seychelles</option>
                        <option value="1000">Sierra Leone</option>
                        <option value="18">Singapore</option>
                        <option value="18">Slovakia</option>
                        <option value="18">Slovenia</option>
                        <option value="0">Solomon Islands</option>
                        <option value="1000">Somalia</option>
                        <option value="18">South Africa</option>
                        <option value="1000">South Sudan</option>
                        <option value="16">Spain</option>
                        <option value="21">Sri Lanka</option>
                        <option value="1000">Sudan</option>
                        <option value="18">Suriname</option>
                        <option value="18">Swaziland</option>
                        <option value="18">Sweden</option>
                        <option value="18">Switzerland</option>
                        <option value="18">Syria</option>
                        <option value="18">Taiwan</option>
                        <option value="18">Tajikistan</option>
                        <option value="18">Tanzania, United Republic of</option>
                        <option value="20">Thailand</option>
                        <option value="18">The Gambia</option>
                        <option value="0">Timor-Leste</option>
                        <option value="0">Togo</option>
                        <option value="18">Tokelau (New Zealand)</option>
                        <option value="18">Tonga</option>
                        <option value="18">Trinidad And Tobago</option>
                        <option value="18">Tunisia</option>
                        <option value="18">Turkey</option>
                        <option value="18">Turkmenistan</option>
                        <option value="18">Turks And Caicos Islands</option>
                        <option value="18">Tuvalu</option>
                        <option value="18">Uganda</option>
                        <option value="18">Ukraine</option>
                        <option value="1000">United Arab Emirates</option>
                        <option value="18">United Kingdom</option>
                        <option value="21" selected>United States</option>
                        <option value="18">Uruguay</option>
                        <option value="20">Uzbekistan</option>
                        <option value="18">Vanuatu</option>
                        <option value="18">Venezuela</option>
                        <option value="18">Vietnam</option>
                        <option value="21">Western Sahara</option>
                        <option value="1000">Yemen</option>
                        <option value="18">Zambia</option>
                        <option value="18">Zimbabwe</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-xs-12 text-center spacers">
                    <small>
                        By entering this site you agree to our`; 

            html+= "         <a href='"+config.link_terms+"'>Terms & Conditions</a>";
            html+= " and";
            html+= "          <a href='"+config.link_privacy+"'>Privacy & Cookie Notice</a>";

            html+= `
                    </small>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-xs-12 text-center spacers">
                    <button class="btn btn-lg btn-primary">ENTER</button>
                </div>
            </div>
        </form>
    </div>

    <div id="age_overlay"></div>`;

    $('body').prepend(html);
}