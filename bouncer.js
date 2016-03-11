/* 
 * Plugin: bouncer.js
 * Description: A simple script to determine if a visitor is of legal drinking age.
 * Author: Ryan Kozak
 * Author's website: https://ryankozak.com
 * PluginURL: https://github.com/d0n601/drinkingAge
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

    err_msg = "<div id='deny_entry' class='alert alert-danger'<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>";
    err_msg+=config.deny_message;
    err_msg+= "</div>";
    $('body').prepend(err_msg).delay(2000);
    window.location = config.redirect;
}


function insertHTML() {

    var html;
            
    html = "<div id='age_controls'><form class='form-inline' action='javascript:submitAge();'><div class='row'><div class='col-lg-12 col-md-12 col-xs-12 spacers'><center> ";
    html+="<img src='"+config.image+"' class='img-responsive'>";
    html+="</center></div><div class='col-lg-12 col-md-12 col-xs-12 text-center spacers'><strong>";
    html+= config.message;
    html+= "</strong></div></div><div class='row'><div class='col-lg-12 col-md-12 col-xs-12 text-center spacers'><label>Date of Birth:</label><div class='form-group'>";
    html+="<select id='a_month'>";
    html+="                        <option value='-1'>Month</option>";
    html+="                        <option value='0'>January</option>";
    html+="                        <option value='1'>February</option>";
    html+="                        <option value='2'>March</option>";
    html+="                        <option value='3'>April</option>";
    html+="                        <option value='4'>May</option>";
    html+="                       <option value='5'>June</option>";
    html+="                       <option value='6'>July</option>";
    html+="                       <option value='7'>August</option>";
    html+="                      <option value='8'>September</option>";
    html+="                      <option value='9'>October</option>";
    html+="                        <option value='10'>November</option>";
    html+="                        <option value='11'>December</option>";
    html+="                    </select>";
    html+="                    <select id='a_day'>";
    html+="                        <option value='-1'>Day</option>";
    html+="                        <option value='1'>1</option>";
    html+="                        <option value='2'>2</option>";
    html+="                        <option value='3'>3</option>";
    html+="                        <option value='4'>4</option>";
    html+="                        <option value='5'>5</option>";
    html+="                        <option value='6'>6</option>";
    html+="                        <option value='7'>7</option>";
    html+="                         <option value='8'>8</option>";
    html+="                        <option value='9'>9</option>";
    html+="                        <option value='10'>10</option>";
    html+="                        <option value='11'>11</option>";
    html+="                        <option value='12'>12</option>";
    html+="                        <option value='13'>13</option>";
    html+="                        <option value='14'>14</option>";
    html+="                        <option value='15'>15</option>";
    html+="                        <option value='16'>16</option>";
    html+="                        <option value='17'>17</option>";
    html+="                        <option value='18'>18</option>";
    html+="                        <option value='19'>19</option>";
    html+="                        <option value='20'>20</option>";
    html+="                        <option value='21'>21</option>";
    html+="                        <option value='22'>22</option>";
    html+="                        <option value='23'>23</option>";
    html+="                        <option value='24'>24</option>";
    html+="                        <option value='25'>25</option>";
    html+="                        <option value='26'>26</option>";
    html+="                        <option value='27'>27</option>";
    html+="                        <option value='28'>28</option>";
    html+="                        <option value='29'>29</option>";
    html+="                        <option value='30'>30</option>";
    html+="                        <option value='31'>31</option>";
    html+="                    </select>";
    html+="                    <select id='a_year'>";
    html+="                        <option value='-1'>Year</option>";
    html+="                        <option value='2001'>2001</option>";
    html+="                        <option value='2000'>2000</option>";
    html+="                        <option value='1999'>1999</option>";
    html+="                        <option value='1998'>1998</option>";
    html+="                        <option value='1997'>1997</option>";
    html+="                        <option value='1996'>1996</option>";
    html+="                        <option value='1995'>1995</option>";
    html+="                        <option value='1994'>1994</option>";
    html+="                        <option value='1993'>1993</option>";
    html+="                        <option value='1992'>1992</option>";
    html+="                        <option value='1991'>1991</option>";
    html+="                        <option value='1990'>1990</option>";
    html+="                        <option value='1989'>1989</option>";
    html+="                        <option value='1988'>1988</option>";
    html+="                        <option value='1987'>1987</option>";
    html+="                        <option value='1986'>1986</option>";
    html+="                        <option value='1985'>1985</option>";
    html+="                        <option value='1984'>1984</option>";
    html+="                        <option value='1983'>1983</option>";
    html+="                        <option value='1982'>1982</option>";
    html+="                        <option value='1981'>1981</option>";
    html+="                        <option value='1980'>1980</option>";
    html+="                        <option value='1979'>1979</option>";
    html+="                        <option value='1978'>1978</option>";
    html+="                        <option value='1977'>1977</option>";
    html+="                        <option value='1976'>1976</option>";
    html+="                        <option value='1975'>1975</option>";
    html+="                        <option value='1974'>1974</option>";
    html+="                        <option value='1973'>1973</option>";
    html+="                        <option value='1972'>1972</option>";
    html+="                        <option value='1971'>1971</option>";
    html+="                        <option value='1970'>1970</option>";
    html+="                        <option value='1969'>1969</option>";
    html+="                        <option value='1968'>1968</option>";
    html+="                        <option value='1967'>1967</option>";
    html+="                        <option value='1966'>1966</option>";
    html+="                        <option value='1965'>1965</option>";
    html+="                        <option value='1964'>1964</option>";
    html+="                        <option value='1963'>1963</option>";
    html+="                        <option value='1962'>1962</option>";
    html+="                        <option value='1961'>1961</option>";
    html+="                        <option value='1960'>1960</option>";
    html+="                        <option value='1959'>1959</option>";
    html+="                        <option value='1958'>1958</option>";
    html+="                        <option value='1957'>1957</option>";
    html+="                        <option value='1956'>1956</option>";
    html+="                        <option value='1955'>1955</option>";
    html+="                        <option value='1954'>1954</option>";
    html+="                        <option value='1953'>1953</option>";
    html+="                        <option value='1952'>1952</option>";
    html+="                        <option value='1951'>1951</option>";
    html+="                        <option value='1950'>1950</option>";
    html+="                        <option value='1949'>1949</option>";
    html+="                        <option value='1948'>1948</option>";
    html+="                        <option value='1947'>1947</option>";
    html+="                        <option value='1946'>1946</option>";
    html+="                        <option value='1945'>1945</option>";
    html+="                        <option value='1944'>1944</option>";
    html+="                        <option value='1943'>1943</option>";
    html+="                        <option value='1942'>1942</option>";
    html+="                        <option value='1941'>1941</option>";
    html+="                        <option value='1940'>1940</option>";
    html+="                        <option value='1939'>1939</option>";
    html+="                        <option value='1938'>1938</option>";
    html+="                        <option value='1937'>1937</option>";
    html+="                        <option value='1936'>1936</option>";
    html+="                       <option value='1935'>1935</option>";
    html+="                        <option value='1934'>1934</option>";
    html+="                        <option value='1933'>1933</option>";
    html+="                        <option value='1932'>1932</option>";
    html+="                        <option value='1931'>1931</option>";
    html+="                        <option value='1930'>1930</option>";
    html+="                        <option value='1929'>1929</option>";
    html+="                        <option value='1928'>1928</option>";
    html+="                        <option value='1927'>1927</option>";
    html+="                        <option value='1926'>1926</option>";
    html+="                        <option value='1925'>1925</option>";
    html+="                        <option value='1924'>1924</option>";
    html+="                        <option value='1923'>1923</option>";
    html+="                        <option value='1922'>1922</option>";
    html+="                        <option value='1921'>1921</option>";
    html+="                        <option value='1920'>1920</option>";
    html+="                        <option value='1919'>1919</option>";
    html+="                        <option value='1918'>1918</option>";
    html+="                        <option value='1917'>1917</option>";
    html+="                        <option value='1916'>1916</option>";
    html+="                        <option value='1915'>1915</option>";
    html+="                        <option value='1914'>1914</option>";
    html+="                        <option value='1913'>1913</option>";
    html+="                    </select>";
    html+="                </div>";
    html+="            </div>";
    html+="        </div>";
    html+="        <div class='row'>";
    html+="            <div class='col-lg-12 col-md-12 col-xs-12 text-center spacers'>";
    html+="               <label>Location:</label>";
    html+="                <div class='form-group'>";
    html+="                   <select id='country'>";
    html+="                    <option value='1000'>Afghanistan</option>";
    html+="                    <option value='18'>Albania</option>";
    html+="                    <option value='18'>Algeria</option>";
    html+="                    <option value='18'>Andorra</option>";
    html+="                    <option value='18'>Angola</option>";
    html+="                    <option value='10'>Antigua and Barbuda</option>";
    html+="                    <option value='18'>Argentina</option>";
    html+="                    <option value='18'>Armenia</option>";
    html+="                    <option value='16'>Aruba</option>";
    html+="                    <option value='18'>Australia</option>";
    html+="                    <option value='16'>Austria</option>";
    html+="                    <option value='18'>Azerbaijan</option>";
    html+="                    <option value='18'>Bahamas</option>";
    html+="                    <option value='0'>Bahrain</option>";
    html+="                    <option value='0'>Bangladesh</option>";
    html+="                    <option value='18'>Barbados</option>";
    html+="                    <option value='18'>Belarus</option>";
    html+="                    <option value='18'>Belgium</option>";
    html+="                    <option value='18'>Belize</option>";
    html+="                    <option value='0'>Benin</option>";
    html+="                    <option value='18'>Bhutan</option>";
    html+="                    <option value='0'>Bolivia</option>";
    html+="                    <option value='18'>Bosnia And Herzegovina</option>";
    html+="                    <option value='18'>Botswana</option>";
    html+="                    <option value='18'>Brazil</option>";
    html+="                    <option value='1000'>Brunei</option>";
    html+="                    <option value='18'>Bulgaria</option>";
    html+="                    <option value='0'>Burkina Faso</option>";
    html+="                    <option value='0'>Burundi</option>";
    html+="                    <option value='0'>Cambodia</option>";
    html+="                   <option value='0'>Cameroon</option>";
    html+="                    <option value='18'>Canada</option>";
    html+="                    <option value='18'>Cape Verde</option>";
    html+="                    <option value='21'>Central Africa</option>";
    html+="                    <option value='18'>Chad</option>";
    html+="                    <option value='18'>Chile</option>";
    html+="                    <option value='0'>China</option>";
    html+="                    <option value='18'>Colombia</option>";
    html+="                    <option value='18'>Comoros</option>";
    html+="                    <option value='18'>Congo, Democratic Republic of the</option>";
    html+="                    <option value='18'>Congo, Republic of the</option>";
    html+="                    <option value='18'>Costa Rica</option>";
    html+="                    <option value='21'>Cote Divoire</option>";
    html+="                    <option value='18'>Croatia</option>";
    html+="                    <option value='18'>Cuba</option>";
    html+="                    <option value='17'>Cyprus</option>";
    html+="                    <option value='18'>Czech Republic</option>";
    html+="                    <option value='18'>Denmark</option>";
    html+="                    <option value='0'>Djibouti</option>";
    html+="                    <option value='16'>Dominica</option>";
    html+="                    <option value='18'>Dominican Republic</option>";
    html+="                    <option value='18'>Ecuador</option>";
    html+="                    <option value='21'>Egypt</option>";
    html+="                    <option value='18'>El Salvador</option>";
    html+="                    <option value='21'>Equatorial Guinea</option>";
    html+="                    <option value='18'>Eritrea</option>";
    html+="                    <option value='18'>Estonia</option>";
    html+="                    <option value='18'>Ethiopia</option>";
    html+="                    <option value='18'>Fiji</option>";
    html+="                    <option value='18'>Finland</option>";
    html+="                    <option value='18'>France</option>";
    html+="                    <option value='18'>Gambia</option>";
    html+="                    <option value='18'>Gabon</option>";
    html+="                    <option value='18'>Georgia</option>";
    html+="                    <option value='18'>Germany</option>";
    html+="                    <option value='18'>Ghana</option>";
    html+="                    <option value='18'>Greece</option>";
    html+="                    <option value='18'>Greenland</option>";
    html+="                    <option value='16'>Grenada</option>";
    html+="                    <option value='18'>Guatemala</option>";
    html+="                    <option value='18'>Guinea</option>";
    html+="                    <option value='0'>Guinea-Bissau</option>";
    html+="                    <option value='18'>Guyana</option>";
    html+="                    <option value='16'>Haiti</option>";
    html+="                    <option value='18'>Honduras</option>";
    html+="                    <option value='18'>Hungary</option>";
    html+="                    <option value='20'>Iceland</option>";
    html+="                    <option value='18'>India</option>";
    html+="                    <option value=0'>Indonesia</option>";
    html+="                    <option value='1000'>Iran</option>";
    html+="                    <option value='21'>Iraq</option>";
    html+="                    <option value='18'>Ireland</option>";
    html+="                    <option value='18'>Israel</option>";
    html+="                    <option value='18'>Italy</option>";
    html+="                    <option value='18'>Jamaica</option>";
    html+="                    <option value='20'>Japan</option>";
    html+="                    <option value='18'>Jordan</option>";
    html+="                    <option value='18'>Kazakhstan</option>";
    html+="                    <option value='18'>Kenya</option>";
    html+="                    <option value='21'>Kiribati</option>";
    html+="                    <option value='19'>Korea, Republic of</option>";
    html+="                    <option value='1000'>Kuwait</option>";
    html+="                    <option value='18'>Kyrgyzstan</option>";
    html+="                    <option value='18'>Lao Peoples Democratic Republic</option>";
    html+="                    <option value='18'>Latvia</option>";
    html+="                    <option value='18'>Lebanon</option>";
    html+="                    <option value='18'>Lesotho</option>";
    html+="                    <option value='18'>Liberia</option>";
    html+="                    <option value='1000'>Libya</option>";
    html+="                    <option value='18'>Liechtenstein</option>";
    html+="                    <option value='18'>Lithuania</option>";
    html+="                    <option value='16'>Luxembourg</option>";
    html+="                    <option value='18'>Macedonia</option>";
    html+="                    <option value='18'>Madagascar</option>";
    html+="                    <option value='18'>Malawi</option>";
    html+="                    <option value='18'>Malaysia</option>";
    html+="                    <option value='1000'>Maldives</option>";
    html+="                    <option value='0'>Mali</option>";
    html+="                    <option value='17'>Malta</option>";
    html+="                    <option value='0'>Marshall Islands</option>";
    html+="                    <option value='1000'>Mauritania</option>";
    html+="                    <option value='18'>Mauritius</option>";
    html+="                    <option value='18'>Mexico</option>";
    html+="                    <option value='21'>Micronesia</option>";
    html+="                    <option value='18'>Moldova</option>";
    html+="                    <option value='18'>Monaco</option>";
    html+="                    <option value='21'>Mongolia</option>";
    html+="                    <option value='18'>Montenegro</option>";
    html+="                    <option value='16'>Morocco</option>";
    html+="                    <option value='18'>Mozambique</option>";
    html+="                    <option value='18'>Myanmar</option>";
    html+="                    <option value='18'>Namibia</option>";
    html+="                    <option value='21'>Nauru</option>";
    html+="                    <option value='18'>Nepal</option>";
    html+="                    <option value='18'>Netherlands</option>";
    html+="                    <option value='18'>New Zealand</option>";
    html+="                    <option value='18'>Nicaragua</option>";
    html+="                    <option value='18'>Niger</option>";
    html+="                    <option value='18'>Nigeria</option>";
    html+="                    <option value='1000'>North Korea</option>";
    html+="                    <option value='18'>Norway</option>";
    html+="                    <option value='21'>Oman</option>";
    html+="                    <option value='1000'>Pakistan</option>";
    html+="                    <option value='21'>Palau</option>";
    html+="                    <option value='18'>Panama</option>";
    html+="                    <option value='18'>Papua New Guinea</option>";
    html+="                    <option value='20'>Paraguay</option>";
    html+="                    <option value='18'>Peru</option>";
    html+="                    <option value='18'>Philippines</option>";
    html+="                    <option value='18'>Poland</option>";
    html+="                    <option value='16'>Portugal</option>";
    html+="                    <option value='18'>Puerto Rico</option>";
    html+="                    <option value='1000'>Qatar</option>";
    html+="                    <option value='18'>Romania</option>";
    html+="                    <option value='18'>Russian Federation</option>";
    html+="                    <option value='18'>Rwanda</option>";
    html+="                    <option value='18'>Saint Kitts And Nevis</option>";
    html+="                   <option value='16'>Saint Lucia</option>";
    html+="                    <option value='16'>Saint Vincent And The Grenadines</option>";
    html+="                    <option value='21'>Samoa</option>";
    html+="                    <option value='16'>San Marino</option>";
    html+="                    <option value='1000'>Sao Tome and Principe</option>";
    html+="                    <option value='1000'>Saudi Arabia</option>";
    html+="                    <option value='18'>Senegal</option>";
    html+="                    <option value='18'>Serbia, Republic of</option>";
    html+="                    <option value='18'>Seychelles</option>";
    html+="                    <option value='1000'>Sierra Leone</option>";
    html+="                    <option value='18'>Singapore</option>";
    html+="                    <option value='18'>Slovakia</option>";
    html+="                    <option value='18'>Slovenia</option>";
    html+="                    <option value='0'>Solomon Islands</option>";
    html+="                    <option value='1000'>Somalia</option>";
    html+="                    <option value='18'>South Africa</option>";
    html+="                    <option value='1000'>South Sudan</option>";
    html+="                    <option value='16'>Spain</option>";
    html+="                    <option value='21'>Sri Lanka</option>";
    html+="                    <option value='1000'>Sudan</option>";
    html+="                    <option value='18'>Suriname</option>";
    html+="                    <option value='18'>Swaziland</option>";
    html+="                    <option value='18'>Sweden</option>";
    html+="                    <option value='18'>Switzerland</option>";
    html+="                    <option value='18'>Syria</option>";
    html+="                    <option value='18'>Taiwan</option>";
    html+="                    <option value='18'>Tajikistan</option>";
    html+="                    <option value='18'>Tanzania, United Republic of</option>";
    html+="                    <option value='20'>Thailand</option>";
    html+="                    <option value='18'>The Gambia</option>";
    html+="                    <option value='0'>Timor-Leste</option>";
    html+="                    <option value='0'>Togo</option>";
    html+="                    <option value='18'>Tokelau (New Zealand)</option>";
    html+="                    <option value='18'>Tonga</option>";
    html+="                    <option value='18'>Trinidad And Tobago</option>";
    html+="                    <option value='18'>Tunisia</option>";
    html+="                    <option value='18'>Turkey</option>";
    html+="                    <option value='18'>Turkmenistan</option>";
    html+="                    <option value='18'>Turks And Caicos Islands</option>";
    html+="                    <option value='18'>Tuvalu</option>";
    html+="                    <option value='18'>Uganda</option>";
    html+="                    <option value='18'>Ukraine</option>";
    html+="                    <option value='1000'>United Arab Emirates</option>";
    html+="                    <option value='18'>United Kingdom</option>";
    html+="                    <option value='21' selected>United States</option>";
    html+="                    <option value='18'>Uruguay</option>";
    html+="                    <option value='20'>Uzbekistan</option>";
    html+="                    <option value='18'>Vanuatu</option>";
    html+="                    <option value='18'>Venezuela</option>";
    html+="                    <option value='18'>Vietnam</option>";
    html+="                    <option value='21'>Western Sahara</option>";
    html+="                    <option value='1000'>Yemen</option>";
    html+="                    <option value='18'>Zambia</option>";
    html+="                    <option value='18'>Zimbabwe</option>";
    html+="                    </select>";
    html+="                </div>";
    html+="           </div>";
    html+="        </div>";
    html+="        <div class='row'>";
    html+="            <div class='col-lg-12 col-md-12 col-xs-12 text-center spacers'>";
    html+="               <small>";
    html+="                    By entering this site you agree to our"; 
    html+="         <a href='"+config.link_terms+"'>Terms & Conditions</a>";
            html+= " and";
            html+= "          <a href='"+config.link_privacy+"'>Privacy & Cookie Notice</a>";
            html+= "</small></div></div><div class='row'><div class='col-lg-12 col-md-12 col-xs-12 text-center spacers'><button class='btn btn-lg btn-primary btn-outline'>ENTER</button></div></div></form>";
    html+="</div>";
    html+="<div id='age_overlay'></div>";

    $('body').prepend(html);
}