<template>
  <mdb-card>
    <mdb-card-body>
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr class="light-blue">
                        <th></th>
                        <th>TEAM</th>
                        <th>Pts</th>
                        <th>PG</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GF</th>
                        <th>GA</th>
                        <th>DIFF</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="badge badge-success">1</span></td>
                        <td style="text-align: left">Corrumana FC</td>
                        <td class="font-weight-bold">56</td>
                        <td>22</td>
                        <td>18</td>
                        <td>2</td>
                        <td>2</td>
                        <td>55</td>
                        <td>11</td>
                        <td>43</td>
                    </tr>
                    <tr>
                        <td><span class="badge badge-success">2</span></td>
                        <td style="text-align: left">Freitas FC</td>
                        <td class="font-weight-bold">49</td>
                        <td>22</td>
                        <td>15</td>
                        <td>4</td>
                        <td>3</td>
                        <td>65</td>
                        <td>7</td>
                        <td>38</td>
                    </tr>
                    <tr>
                        <td><span class="badge badge-success">3</span></td>
                        <td style="text-align: left">Tchuela FC</td>
                        <td class="font-weight-bold">47</td>
                        <td>22</td>
                        <td>15</td>
                        <td>2</td>
                        <td>5</td>
                        <td>48</td>
                        <td>12</td>
                        <td>36</td>
                    </tr>
                    <tr>
                        <td><span class="badge badge-success">4</span></td>
                        <td style="text-align: left">FC Sabie</td>
                        <td class="font-weight-bold">39</td>
                        <td>22</td>
                        <td>11</td>
                        <td>6</td>
                        <td>5</td>
                        <td>42</td>
                        <td>16</td>
                        <td>26</td>
                    </tr>
                    <tr>
                        <td><span class="badge badge-success">5</span></td>
                        <td style="text-align: left">Baptine FC</td>
                        <td class="font-weight-bold">35</td>
                        <td>22</td>
                        <td>10</td>
                        <td>6</td>
                        <td>7</td>
                        <td>35</td>
                        <td>26</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td><span class="badge badge-success">6</span></td>
                        <td style="text-align: left">Agri-Sul FC</td>
                        <td class="font-weight-bold">30</td>
                        <td>22</td>
                        <td>8</td>
                        <td>6</td>
                        <td>8</td>
                        <td>23</td>
                        <td>28</td>
                        <td>-5</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
  import { mdbCard, mdbCardBody } from 'mdbvue';
  export default {
    name: 'Standings',
    components: {
      mdbCard,
      mdbCardBody
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
